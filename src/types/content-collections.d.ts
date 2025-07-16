declare module 'content-collections' {
  interface BlogPost {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
    category?: string;
    content: string;
    _meta: {
      filePath: string;
      fileName: string;
      directory: string;
      path: string;
      extension: string;
    };
  }

  interface Project {
    title: string;
    date: string;
    description: string;
    category: string;
    tags: string[];
    featured: boolean;
    year: string;
    image?: string;
    content: string;
    _meta: {
      filePath: string;
      fileName: string;
      directory: string;
      path: string;
      extension: string;
    };
  }

  export const allBlogs: BlogPost[];
  export const allProjects: Project[];
} 