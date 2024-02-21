import React, { useState } from 'react';
import { Menu } from 'lucide-react'; // Import the Menu icon from lucide-react
import MobileNav from "./MobileNav";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define function to handle closing mobile navigation
  const handleCloseMobileNav = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20'>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>
              {/* Logo */}
              <div className='ml-4 mr-8'>
                <a href="/">
                <img src={require('../../assets/icp.svg')} className='h-10 w-10' alt='Logo' />
                </a>
              </div>
              
              {/* MobileMenu for mobile view */}
              <div className='ml-auto flex space-x-4 sm:hidden'>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-gray-600 dark:text-gray-400 hover:text-white focus:outline-none'>
                  {/* Use the Menu icon */}
                  <Menu className='h-6 w-6' />
                </button>
              </div>
              
              {/* List of links as buttons (hidden in mobile view) */}
              <ul className='hidden sm:flex ml-4 space-x-8'>
                <li>
                  <a href="#" className='text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 relative group'>Discover<span className="animate-line"></span></a>
                </li>
                <li>
                  <a href="#" className='text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 relative group'>Cart<span className="animate-line"></span></a>
                </li>
                <li>
                  <a href="#" className='text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 relative group'>My Assets<span className="animate-line"></span></a>
                </li>
                <li>
                  <a href="#" className='text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 relative group'>Upload<span className="animate-line"></span></a>
                </li>
              </ul>
              
              {/* Login and Signup buttons (hidden in mobile view) */}
              <div className='hidden sm:flex ml-auto space-x-4'>
                <button className='text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-600 dark:hover:bg-gray-500 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded focus:outline-none transition duration-300'>Login</button>
                <button className='text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 border border-blue-600 dark:border-blue-500 px-4 py-2 rounded focus:outline-none transition duration-300'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Render MobileNav component */}
      {isMobileMenuOpen && <MobileNav onClose={handleCloseMobileNav} />}
      
      {/* Inline CSS for the animated line effect */}
      <style jsx>{`
        .animate-line::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          bottom: -2px; /* Adjust this value to position the line appropriately */
          width: 0;
          height: 2px;
          background-color: #3182ce; /* Adjust color as needed */
          transition: width 0.3s ease;
        }

        .group:hover .animate-line::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Navbar;








