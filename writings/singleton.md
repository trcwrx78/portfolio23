---
title: 'Singleton in Next.js Blog System'
date: '2023-08-27'
description: 'Explore the journey of utilizing Next.js for blog creation, highlighting Brad Traversy’s influential course. The article delves into the mechanics of using markdown files for content, and the push for efficient code reuse. Discover the transition from utility functions to class methods and the strategic implementation of the singleton pattern to ensure optimal system performance.'
oneLiner: 'Discover the use of Next.js in blog creation, the shift from utility functions to class methods, and the smart integration of the singleton pattern for efficiency.'
---

A while back, I embarked on a Udemy course that had a significant influence on my professional journey. It was Brad Traversy’s [Next.js Dev to Deployment](https://www.udemy.com/course/nextjs-dev-to-deployment) course. As expected from his content, it was top-notch. One of the highlights was a straightforward blog project. Instead of a conventional CRM, Traversy used markdown files to drive content. With a blend of packages and the inherent Node capabilities in Next.js, the system read the file structure, fetched markdown files, and displayed content. Thus, as a blog user, you could draft your markdown, push it to your preferred source control (like [GitHub](https://github.com/)), and if you're using a provider like [Vercel](https://vercel.com/), your website gets updated with fresh content immediately. I might be simplifying it a bit, but this post isn't mainly about the Next.js aspect. It’s about the underlying function(s) powering the blog system. My goal was to repurpose and potentially extend this function.

> *As a fun fact, I'm drafting this very piece in a markdown file, leveraging the system in real-time!*

Initially, my goal was code reuse. I wanted multiple sections using the same logic. For instance, if there's a blog, it should fetch content from a blog section; if there are writings, then it should fetch from a writing section. Naturally, a class that could be instantiated when needed seemed like an optimal solution for reuse. I began by transitioning utility functions into methods within my new class. The idea was to pass a directory string to the class and fetch IDs and data from that specific folder. Soon enough, I had my class pulling information seamlessly from the project's folder structure.

But why stop there? I aspired for more. My primary objective was generating multiple sections from markdown. Fetching data in a Next or React application is a common operation. Given the structure of my class, I realized that there could potentially be numerous class instantiations. This reminded me of the singleton pattern, a prevalent design pattern in several of my previous projects. It felt like the right moment to implement it.

The singleton pattern ensures a single instance of a class at any given time. The conventional setup goes something like:

```typescript
class BlogMD {
  private static instance: BlogMD;

  private constructor(directory: string) {
    this.directoryManager = path.join(process.cwd(), directory);
  }

  static getInstance(directory: string): BlogMD {
    // Only create new instance if one doesn't already exist
    if (!this.instance) {
      this.instance = new BlogMD(directory);
    }
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

  // Other Methods...
}
```

The pattern checks for an existing instance when a new class is instantiated. If found, it reuses that instance; otherwise, it creates a new one. Excitingly, I realized I had unintentionally introduced a bug. Upon creating a new instance and passing a different directory, the class returned content from the previous directory. While the function works flawlessly for one instance, it falls short for multiple instances. My requirements included at least one instance per directory. A swift refactor led me to this:

```typescript
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

  // Other methods...
}
```

This revised singleton examines all instances by directory name and establishes a new one for every new directory passed to the constructor.

In conclusion, this architecture is the foundation of my website, with projects in one directory and writings in another. The segregation is neat, and I'm not redundantly initiating the class each time data is fetched.