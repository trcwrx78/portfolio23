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
  contentHtml?: string;
  [key: string]: any; // for other properties parsed by gray-matter
}

interface BlogId {
  params: {
    id: string;
  };
}

class BlogMD {
  private static instance: BlogMD;
  directoryManager: string;

  private constructor(directory: string) {
    this.directoryManager = path.join(process.cwd(), directory);
  }

  static getInstance(directory: string): BlogMD {
    // Only create new instance if one doesn't already exist
    if (!this.instance) {
      this.instance = new BlogMD(directory);
    }

    // Return the existing instance if one exists
    // or the new instance if one doesn't exist
    return this.instance;
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
      };
    });

    return allData;
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
