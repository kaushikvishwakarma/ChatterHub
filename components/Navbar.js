

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          My App
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;