'use client';

import React, { useState } from 'react';
import { Text } from '@radix-ui/themes';
import Link from 'next/link';
import { Project } from '@/lib/search-data';

const allCategories = ['Hardware', 'Software', 'AI/ML', 'DevOps'];

interface ProjectFilterProps {
  projects: Project[];
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Filter projects based on selected categories
  const filteredProjects = selectedCategories.length === 0 
    ? projects
    : projects.filter((project: Project) => selectedCategories.includes(project.category));

  // Separate featured and non-featured projects
  const featuredProjects = filteredProjects.filter((p: Project) => p.featured);
  const regularProjects = filteredProjects.filter((p: Project) => !p.featured);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3">
          {allCategories.map((category: string) => {
            const isActive = selectedCategories.includes(category);
            
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16 flex flex-col gap-4">
          <Text size="6" weight="bold" className="text-gray-900">
            Featured Projects
          </Text>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project: Project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="block group"> 
                <article className="group cursor-pointer">
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
                        {project.tags.map((tag: string) => (
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
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Projects */}
      <div className="flex flex-col gap-4">
        <Text size="6" weight="bold" className="text-gray-900">
          {selectedCategories.length > 0 
            ? `${selectedCategories.join(', ')} Projects` 
            : 'All Projects'
          }
        </Text>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularProjects.map((project: Project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="block group">
              <article className="group cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
} 