import React, { useEffect, useRef } from 'react';

function MobileNav({ isOpen, onClose }) {
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        onClose(); // Call the onClose function when clicking outside the nav
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={navRef}
        className="bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-300"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <ul className="mb-4">
          <li>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">Discover</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">Cart</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">My Assets</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">Upload</a>
          </li>
        </ul>

        <div className="flex justify-center">
          <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-600 dark:hover:bg-gray-500 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded focus:outline-none transition duration-300 mr-2">Login</button>
          <button className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 border border-blue-600 dark:border-blue-500 px-4 py-2 rounded focus:outline-none transition duration-300">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;


