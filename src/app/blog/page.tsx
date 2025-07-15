import React from 'react';
import Link from 'next/link';
import { Text } from '@radix-ui/themes';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

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

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="w-full px-4 py-3 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select className="px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Categories</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="cooking">Cooking</option>
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="mb-3">
                  <Text size="1" className="text-gray-500 uppercase tracking-wide">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </Text>
                </div>
                
                <Link href={post.url} className="block group">
                  <Text size="5" weight="bold" className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </Text>
                </Link>
                
                <Text size="3" className="text-gray-600 mb-4 line-clamp-3">
                  {post.body.raw.slice(0, 150)}...
                </Text>
                
                <Link 
                  href={post.url}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Read more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</span>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
} 