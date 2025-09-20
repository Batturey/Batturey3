// components/Navbar.jsx
import React from "react"

const Navbar = ({ onLoginClick }) => {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-screen-xl mx-auto px-6 flex justify-between items-center h-16'>
        {/* Brand */}
        <a
          href='/'
          className='text-2xl font-bold text-black dark:text-white tracking-tight hover:opacity-80 transition'
        >
           AppleShop
        </a>

        {/* Nav Links */}
        <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
          <a
            href='#about'
            className='text-gray-800 dark:text-gray-200 hover:text-blue-600 transition'
          >
            About
          </a>
          <a
            href='#products'
            className='text-gray-800 dark:text-gray-200 hover:text-blue-600 transition'
          >
            Products
          </a>
          <a
            href='#contact'
            className='text-gray-800 dark:text-gray-200 hover:text-blue-600 transition'
          >
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Search'
            className='hidden md:block text-sm px-3 py-1.5 border border-gray-300 rounded bg-gray-50 dark:bg-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
          />
          <button
            onClick={() =>
              document
                .getElementById("cart-sidebar")
                ?.classList.toggle("translate-x-full")
            }
            className='text-xl text-gray-700 dark:text-white hover:text-blue-500'
          >
            🛒
          </button>
          <button
            onClick={() => onLoginClick()}
            className='text-xl text-gray-700 dark:text-white hover:text-blue-500'
          >
            👤
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
