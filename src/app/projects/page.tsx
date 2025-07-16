import React from 'react';
import { Text } from '@radix-ui/themes';
import { allProjects } from 'content-collections';
import { ProjectFilter } from '@/components/ProjectFilter';

export default function ProjectsPage() {
  const projects = allProjects.map((project) => ({ ...project, slug: project._meta.path }));

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

        {/* Project Filter Component */}
        <ProjectFilter projects={projects} />
      </div>
    </div>
  );
} 