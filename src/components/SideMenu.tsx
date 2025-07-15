import React from 'react';
import Link from 'next/link';
import { Text } from '@radix-ui/themes';
import { LINKS } from '@/lib/constants';

interface SideMenuProps {
  children?: React.ReactNode;
}

const SideMenu: React.FC<SideMenuProps> = ({ 
  children 
}) => {
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 shadow-lg z-50 p-6">
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            {/* Logo */}
            <div className="flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.343 2.65705L20 0L40 20L20 40L17.3429 37.3429L34.6859 20L17.343 2.65705Z" fill="#D41C1C"></path>
                <path d="M13.8744 6.12564L16.5314 3.46859L33.0628 20L16.5314 36.5314L13.8744 33.8744L27.7487 20L13.8744 6.12564Z" fill="#D41C1C"></path>
                <path d="M0 20L13.0628 6.93718L26.1256 20L13.0628 33.0628L10.4058 30.4058L20.8115 20L13.0628 12.2513L2.65705 22.657L0 20Z" fill="#D41C1C"></path>
                <path d="M13.0628 13.8744L10.4058 16.5314L13.8744 20L6.93718 26.9372L9.59422 29.5942L19.1885 20L13.0628 13.8744Z" fill="#D41C1C"></path>
                <path d="M6.12564 26.1256L3.46859 23.4686L9.56643 17.3708L12.2235 20.0278L6.12564 26.1256Z" fill="#D41C1C"></path>
              </svg>
            </div>
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
              className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
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
  );
};

export default SideMenu; 