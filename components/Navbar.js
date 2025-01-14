'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { BellIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Forums', href: '/forums' },
  { name: 'UserChat', href: '/chat' },
  { name: 'Calendar', href: '/calendar' },
];

const Navbar = () => {
  const pathname = usePathname();
  const user = useUser();
  // console.log(user.user?.id);
  return (
    <nav className="bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              ChatterHub
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="flex space-x-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {/* for Gradient underline effect */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section - Notifications & User */}
          <div className="flex items-center space-x-4">
            {/* Notification Button */}
            <button
              type="button"
              className="relative rounded-full p-2 text-gray-400 hover:text-white 
                       transition-colors duration-200 hover:bg-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              {/* Notification Badge */}
              <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            </button>

            {/* User Button with custom appearance */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
              <div className="relative">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8 rounded-full ring-2 ring-gray-800 hover:ring-purple-500 transition-all duration-200"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;