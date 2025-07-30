'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@radix-ui/themes';
import { LINKS } from '@/lib/constants';
import { useMobileMenu } from './MobileMenuContext';
import { useSearch } from './SearchContext';
import { Search } from 'lucide-react';

interface SideMenuProps {
  children?: React.ReactNode;
}

const SideMenu: React.FC<SideMenuProps> = ({ 
  children 
}) => {
  const { isOpen, close } = useMobileMenu();
  const { openSearch } = useSearch();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-white bg-opacity-80 z-40"
          onClick={close}
        />
      )}
      
            {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 shadow-lg z-50 p-6 transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Mobile Close Button */}
        <button
          onClick={close}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="mb-8">
          <Link 
            href="/" 
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            onClick={close}
          >
            <Image src="/me.webp" alt="Tristian 'Ty' Sanders" width={48} height={48} className="rounded-full" />
            <div className="flex flex-col">
              <Text weight="bold" className="text-lg text-gray-900">Tristian <em>'Ty'</em> Sanders</Text>
              <Text weight="medium" className="text-sm text-gray-600">Computer Engineer</Text>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-4 py-3 pl-10 pr-12 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
              onClick={openSearch}
              readOnly
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <span className="text-xs text-gray-400 font-mono">/</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <div className="space-y-1">
            {Object.values(LINKS).map((link) => (
              <Link 
                href={link.href} 
                key={link.title} 
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group"
                onClick={close}
              >
                <div className="flex-shrink-0 w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-200 flex items-center justify-center">
                  <link.icon size={20} />
                </div>
                <Text weight="medium" className="text-sm flex items-center">{link.title}</Text>
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer Section */}
        <div className="mt-auto pt-6 border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
    </>
  );
};

export default SideMenu; 