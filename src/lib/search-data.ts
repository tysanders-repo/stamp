import { allBlogs, allProjects } from "content-collections";

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  category?: string
}

export interface Project {
  slug: string
  title: string
  date: string
  description: string
  category: string
  tags: string[]
  featured: boolean
  year: string
  image?: string
}

export const blogPosts: BlogPost[] = allBlogs.map(post => ({
  slug: post._meta.path,
  title: post.title,
  date: post.date,
  excerpt: post.excerpt,
  tags: post.tags,
  category: post.category,
}));

export const projects: Project[] = allProjects.map(project => ({
  slug: project._meta.path,
  title: project.title,
  date: project.date,
  description: project.description,
  category: project.category,
  tags: project.tags,
  featured: project.featured,
  year: project.year,
  image: project.image,
})); 