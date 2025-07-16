"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState, useMemo, useCallback } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import fuzzysort from "fuzzysort";
import { Search, X, ChevronRight } from "lucide-react";
import { useSearch } from "./SearchContext";
import { blogPosts, projects } from "@/lib/search-data";

interface SearchResult {
  item: {
    slug: string;
    title: string;
    description?: string;
    excerpt?: string;
    tags?: string[];
    category?: string;
    year?: string;
    date?: string;
  };
  score: number;
  type: 'project' | 'blog';
}

const SearchOverlay = () => {
  const { isSearchOpen, openSearch, closeSearch } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Search results using Fuzzysort
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { projects: [], blogs: [] };

    const results: SearchResult[] = [];

    // Search projects
    const projectResults = fuzzysort.go(searchQuery, projects, {
      keys: ['title', 'description', 'tags', 'category'],
      threshold: -1000
    });

    projectResults.forEach(result => {
      results.push({
        item: result.obj,
        score: result.score,
        type: 'project'
      });
    });

    // Search blog posts
    const blogResults = fuzzysort.go(searchQuery, blogPosts, {
      keys: ['title', 'excerpt', 'tags', 'category'],
      threshold: -1000
    });

    blogResults.forEach(result => {
      results.push({
        item: result.obj,
        score: result.score,
        type: 'blog'
      });
    });

    // Sort by score (best matches first, regardless of type)
    results.sort((a, b) => b.score - a.score);

    // Take top results and separate by type
    const topResults = results.slice(0, 10);
    
    return {
      blogs: topResults.filter(r => r.type === 'blog'),
      projects: topResults.filter(r => r.type === 'project')
    };
  }, [searchQuery]);

  const totalResults = searchResults.projects.length + searchResults.blogs.length;

  // Get all results in a flat array for keyboard navigation
  const allResults = useMemo(() => {
    return [...searchResults.projects, ...searchResults.blogs];
  }, [searchResults]);

  // Handle navigation to selected item
  const handleSelectItem = useCallback((result: SearchResult) => {
    if (result.type === 'project') {
      // Navigate to project page
      window.location.href = `/projects/${result.item.slug}`;
    } else if (result.type === 'blog') {
      // Navigate to blog post
      window.location.href = `/blog/${result.item.slug}`;
    }
    closeSearch();
  }, [closeSearch, searchQuery, selectedIndex]);

  useEffect(() => {
    const keyPressEvent = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "/") {
        e.preventDefault();
        openSearch();
      }

      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
        setSearchQuery("");
        setSelectedIndex(0);
      }
    };

    window.addEventListener("keydown", keyPressEvent);
    return () => window.removeEventListener("keydown", keyPressEvent);
  }, [isSearchOpen, closeSearch, openSearch]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSearchOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % totalResults);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + totalResults) % totalResults);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (allResults[selectedIndex]) {
          handleSelectItem(allResults[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, totalResults, selectedIndex, allResults, handleSelectItem]);

  return (
    <Dialog.Root open={isSearchOpen} onOpenChange={closeSearch}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-[2px] bg-white/20" />
        <Dialog.Content
          className="fixed top-[20%] left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl w-[90vw] max-w-2xl z-50"
        >
          <Dialog.Title asChild>
            <VisuallyHidden.Root>Search</VisuallyHidden.Root>
          </Dialog.Title>
          
          {/* Search Input */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects and blog posts..."
                className="flex-1 text-lg outline-none placeholder-gray-400"
                autoFocus
              />
              <button
                onClick={closeSearch}
                className="px-2 py-1 text-sm text-gray-500 hover:text-gray-700 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery.trim() ? (
              <div className="p-4 space-y-6">
                {/* Projects Section */}
                {searchResults.projects.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Projects</h3>
                    <div className="space-y-2">
                      {searchResults.projects.map((result) => {
                        const globalIndex = allResults.findIndex(r => r.item.slug === result.item.slug && r.type === 'project');
                        return (
                          <div
                            key={`project-${result.item.slug}`}
                            className={`p-3 rounded-lg cursor-pointer transition-colors ${
                              selectedIndex === globalIndex ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => handleSelectItem(result)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900">{result.item.title}</div>
                                <div className="text-sm text-gray-600">{result.item.description}</div>
                                <div className="flex gap-2 mt-1">
                                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                    {result.item.category}
                                  </span>
                                  <span className="text-xs text-gray-500">{result.item.year}</span>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Blog Posts Section */}
                {searchResults.blogs.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Blog Posts</h3>
                    <div className="space-y-2">
                      {searchResults.blogs.map((result) => {
                        const globalIndex = allResults.findIndex(r => r.item.slug === result.item.slug && r.type === 'blog');
                        return (
                          <div
                            key={`blog-${result.item.slug}`}
                            className={`p-3 rounded-lg cursor-pointer transition-colors ${
                              selectedIndex === globalIndex ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => handleSelectItem(result)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900">{result.item.title}</div>
                                <div className="text-sm text-gray-600">{result.item.excerpt}</div>
                                <div className="flex gap-2 mt-1">
                                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                    {result.item.category}
                                  </span>
                                  <span className="text-xs text-gray-500">{result.item.date}</span>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* No Results */}
                {totalResults === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                Start typing to search projects and blog posts...
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SearchOverlay;