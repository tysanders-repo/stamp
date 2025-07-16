import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  category: z.string().optional(),
});

const projectSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean(),
  year: z.string(),
  image: z.string().optional(),
});

const blog = defineCollection({
  name: "blog",
  schema: blogSchema,
  directory: "src/content/blog",
  include: "**/*.md",
});

const projects = defineCollection({
  name: "projects", 
  schema: projectSchema,
  directory: "src/content/projects",
  include: "**/*.md",
});

export default defineConfig({
  collections: [blog, projects],
});

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