import React from 'react';
import { Text } from '@radix-ui/themes';

// Mock projects data - replace with actual data
const projects = [
  {
    id: '1',
    title: 'High-Performance IoT System',
    category: 'Hardware',
    description: 'A low-power 4-layer PCB design with SoC integration and UWB signal processing for IoT applications.',
    image: '/api/placeholder/400/250',
    tags: ['PCB Design', 'IoT', 'UWB', 'Low-Power'],
    year: '2024',
    featured: true
  },
  {
    id: '2',
    title: 'Real-Time Data Processing Pipeline',
    category: 'Software',
    description: 'Built a scalable data processing system that handles millions of events per second with sub-millisecond latency.',
    image: '/api/placeholder/400/250',
    tags: ['System Design', 'Real-Time', 'Scalability', 'Performance'],
    year: '2024',
    featured: true
  },
  {
    id: '3',
    title: 'Machine Learning Model Optimization',
    category: 'AI/ML',
    description: 'Developed techniques to reduce model inference time by 60% while maintaining 99% accuracy.',
    image: '/api/placeholder/400/250',
    tags: ['Machine Learning', 'Optimization', 'Performance', 'Neural Networks'],
    year: '2023',
    featured: false
  },
  {
    id: '4',
    title: 'Distributed Computing Framework',
    category: 'Software',
    description: 'Created a framework for distributed computing that scales across thousands of nodes with fault tolerance.',
    image: '/api/placeholder/400/250',
    tags: ['Distributed Systems', 'Fault Tolerance', 'Scalability', 'Go'],
    year: '2023',
    featured: false
  },
  {
    id: '5',
    title: 'Embedded Systems Controller',
    category: 'Hardware',
    description: 'Designed and implemented a real-time controller for industrial automation with safety-critical features.',
    image: '/api/placeholder/400/250',
    tags: ['Embedded Systems', 'Real-Time', 'Safety', 'Industrial'],
    year: '2023',
    featured: false
  },
  {
    id: '6',
    title: 'Cloud-Native Architecture',
    category: 'DevOps',
    description: 'Architected a cloud-native solution that reduced infrastructure costs by 40% and improved deployment speed.',
    image: '/api/placeholder/400/250',
    tags: ['Cloud', 'DevOps', 'Kubernetes', 'Microservices'],
    year: '2022',
    featured: false
  }
];

const categories = ['All', 'Hardware', 'Software', 'AI/ML', 'DevOps'];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start">
      <div className="max-w-4xl px-8 py-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <Text size="8" weight="bold" className="text-gray-900">
            Projects
          </Text>
          <Text size="4" className="text-gray-600 leading-relaxed">
            A collection of engineering projects spanning hardware design, software development, and system architecture. 
            Each project represents a unique challenge and learning opportunity.
          </Text>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 flex flex-col gap-4">
          <Text size="6" weight="bold" className="text-gray-900">
            Featured Projects
          </Text>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.filter(p => p.featured).map((project) => (
              <article key={project.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Project Image */}
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                      <Text size="3" className="text-gray-500">Project Image</Text>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                      <Text size="1" className="text-gray-500">
                        {project.year}
                      </Text>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Text size="5" weight="bold" className="text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </Text>
                      
                      <Text size="3" className="text-gray-600 leading-relaxed">
                        {project.description}
                      </Text>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="flex flex-col gap-4">
          <Text size="6" weight="bold" className="text-gray-900">
            All Projects
          </Text>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.featured).map((project) => (
              <article key={project.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  {/* Project Image */}
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <Text size="2" className="text-gray-400">Project Image</Text>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                      <Text size="1" className="text-gray-400">
                        {project.year}
                      </Text>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Text size="4" weight="bold" className="text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </Text>
                      
                      <Text size="2" className="text-gray-600 leading-relaxed">
                        {project.description}
                      </Text>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 