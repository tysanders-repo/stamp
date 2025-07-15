import React from 'react';
import { Text } from '@radix-ui/themes';
import { compareDesc, parseISO } from 'date-fns'
import { getBlogPosts } from '@/lib/content'
import { BlogFilter } from '@/components/BlogFilter';

export default async function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    const dateA = typeof a.date === 'string' ? parseISO(a.date) : new Date(a.date)
    const dateB = typeof b.date === 'string' ? parseISO(b.date) : new Date(b.date)
    return compareDesc(dateA, dateB)
  })

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="max-w-4xl w-full px-6 py-12">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3">
          <Text size="8" weight="bold" className="text-gray-900 mb-4">
            Blog
          </Text>
          <Text size="4" className="text-gray-600">
            Thoughts on engineering, design, and the intersection of technology and creativity.
          </Text>
        </div>

        {/* Blog Filter Component */}
        <BlogFilter posts={posts} />
      </div>
    </div>
  );
} 