import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface MatterData {
  [key: string]: any;
}

interface BlogPost {
  id: string;
  date?: string;
  contentHtml?: string;
}

interface BlogId {
  params: {
    id: string;
  };
}

class BlogMD {
  private static instances: { [directory: string]: BlogMD } = {};
  directoryManager: string;

  private constructor(directory: string) {
    this.directoryManager = path.join(process.cwd(), directory);
  }

  static getInstance(directory: string): BlogMD {
    // If an instance for the directory doesn't exist, create one
    if (!this.instances[directory]) {
      this.instances[directory] = new BlogMD(directory);
    }

    // Return the instance for the directory
    return this.instances[directory];
  }

  getAllData(): BlogPost[] {
    // Get file names under directory
    const fileNames = fs.readdirSync(this.directoryManager);
    const allData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullpath = path.join(this.directoryManager, fileName);
      const fileContents = fs.readFileSync(fullpath, 'utf8');

      // Use gray-matter to parse the project metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      } as BlogPost;
    });

    // Sort posts by date
    return allData.sort((a, b) => {
      if (a.date && b.date && a.date < b.date) {
        return 1;
      } else if (a.date && b.date && a.date > b.date) {
        return -1;
      }
      return 0; // Equal or one of them doesn't have a date
    });
  }

  getAllIds(): BlogId[] {
    const fileNames = fs.readdirSync(this.directoryManager);

    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

  async getData(id: string): Promise<BlogPost> {
    const fullpath = path.join(this.directoryManager, `${id}.md`);
    const fileContents = fs.readFileSync(fullpath, 'utf8');

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }
}

export default BlogMD;
