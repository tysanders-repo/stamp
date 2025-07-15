// This file contains search data that can be used in client components
// It will be populated by server-side functions

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

// Sample data for now - this will be replaced with real data from content files
export const blogPosts: BlogPost[] = [
  {
    slug: 'daily-leetcode',
    title: 'Daily Leetcode 01',
    date: '2025-07-14',
    excerpt: "Today's problem and solution approach for the daily LeetCode challenge.",
    tags: ['leetcode', 'algorithms', 'python'],
    category: 'coding'
  }
]

export const projects: Project[] = [
  {
    slug: 'high-performance-iot',
    title: 'High-Performance IoT System',
    date: '2024-01-15',
    description: 'A low-power 4-layer PCB design with SoC integration and UWB signal processing for IoT applications.',
    category: 'Hardware',
    tags: ['PCB Design', 'IoT', 'UWB', 'Low-Power'],
    featured: true,
    year: '2024'
  },
  {
    slug: 'real-time-data-pipeline',
    title: 'Real-Time Data Processing Pipeline',
    date: '2024-03-20',
    description: 'Built a scalable data processing system that handles millions of events per second with sub-millisecond latency.',
    category: 'Software',
    tags: ['System Design', 'Real-Time', 'Scalability', 'Performance'],
    featured: true,
    year: '2024'
  }
] 