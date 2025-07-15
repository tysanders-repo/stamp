import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

// Blog post type
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  category?: string
  content: string
}

// Project type
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
  content: string
}

// Get all blog posts
export function getBlogPosts(): BlogPost[] {
  // Only run on server side
  if (typeof window !== 'undefined') {
    return []
  }

  const blogDirectory = path.join(contentDirectory, 'blog')
  const fileNames = fs.readdirSync(blogDirectory)
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        category: data.category,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

// Get all projects
export function getProjects(): Project[] {
  // Only run on server side
  if (typeof window !== 'undefined') {
    return []
  }

  const projectsDirectory = path.join(contentDirectory, 'projects')
  const fileNames = fs.readdirSync(projectsDirectory)
  
  const projects = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        category: data.category,
        tags: data.tags || [],
        featured: data.featured || false,
        year: data.year,
        image: data.image,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return projects
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | null {
  // Only run on server side
  if (typeof window !== 'undefined') {
    return null
  }

  try {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags || [],
      category: data.category,
      content,
    }
  } catch {
    return null
  }
}

// Get a single project by slug
export function getProject(slug: string): Project | null {
  // Only run on server side
  if (typeof window !== 'undefined') {
    return null
  }

  try {
    const fullPath = path.join(contentDirectory, 'projects', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      category: data.category,
      tags: data.tags || [],
      featured: data.featured || false,
      year: data.year,
      image: data.image,
      content,
    }
  } catch {
    return null
  }
} 