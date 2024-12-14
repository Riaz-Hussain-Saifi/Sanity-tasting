"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-around">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <svg 
            width="37" 
            height="30" 
            viewBox="0 0 37 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <g clipPath="url(#clip0_1_1135)">
              <path d="M0 2.86525V9.6182C0 11.6749 2.50611 12.7719 4.03763 11.3322L11.3471 4.5792C12.9483 3.1052 11.904 0.5 9.71119 0.5H2.40169C1.07902 0.5 0 1.56265 0 2.86525Z" fill="white"/>
              <path d="M34.5983 0.5H27.2888C25.1308 0.5 24.0517 3.1052 25.6529 4.5792L32.9624 11.3322C34.4939 12.7376 37 11.6749 37 9.6182V2.86525C37 1.56265 35.921 0.5 34.5983 0.5Z" fill="white"/>
              <path d="M20.1533 16.9882L32.9624 28.8487C34.4939 30.2542 37 29.1915 37 27.1348V20.3133C37 19.662 36.7215 19.0449 36.2342 18.5993L20.1533 3.68796C19.2135 2.83098 17.7865 2.83098 16.8467 3.68796L0.765757 18.5993C0.278457 19.0449 0 19.662 0 20.3133V27.1348C0 29.1915 2.50611 30.2884 4.03763 28.8487L16.8467 16.9882C17.7865 16.1312 19.2135 16.1312 20.1533 16.9882Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_1_1135">
                <rect width="37" height="29" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
          </svg>
          <span className="text-lg font-semibold">Whitepace</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`
          fixed top-16 left-0 w-full bg-blue-900 p-4 
          md:static md:w-auto md:p-0 md:bg-transparent
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:flex md:space-x-6 lg:space-x-8
        `}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <Link href="#products" className="text-lg hover:text-blue-200 transition-colors">
              Products
            </Link>
            <Link href="#solutions" className="text-lg hover:text-blue-200 transition-colors">
              Solutions
            </Link>
            <Link href="#resources" className="text-lg hover:text-blue-200 transition-colors">
              Resources
            </Link>
            <Link href="#pricing" className="text-lg hover:text-blue-200 transition-colors">
              Pricing
            </Link>
            <Button className="md:hidden w-full text-blue-900 bg-amber-200 border-2 border-white rounded-md px-8 text-lg py-2 mt-4">
              Login
            </Button>
          </div>
        </div>

        {/* Desktop Login Button */}
        <Button className="hidden hover:text-white md:block text-blue-900 bg-amber-300 border-2 border-white rounded-md px-8 py-0  text-lg">
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;