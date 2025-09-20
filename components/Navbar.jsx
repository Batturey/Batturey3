import React, { useEffect, useRef, useState } from "react"
import { FaShoppingCart, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({ onLoginClick }) => {
  const cartCountRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Set cart count
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    if (cartCountRef.current) {
      cartCountRef.current.innerText = totalItems
    }
  }, [])

  // Load dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle("dark", newMode)
    localStorage.setItem("theme", newMode ? "dark" : "light")
  }

  const handleCartClick = () => {
    const sidebar = document.getElementById("cart-sidebar")
    if (sidebar) sidebar.classList.toggle("translate-x-full")
  }

  return (
    <header className='bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Brand */}
        <div
          className='text-2xl font-bold text-blue-600 dark:text-white cursor-pointer transition-transform transform hover:scale-105'
          onClick={() => window.scrollTo(0, 0)}
        >
          AppleShop
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-6 font-medium'>
          <a
            href='#about'
            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
          >
            About
          </a>
          <a
            href='#products'
            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
          >
            Products
          </a>
          <a
            href='#contact'
            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
          >
            Contact Us
          </a>
        </nav>

        {/* Right-side controls */}
        <div className='flex items-center space-x-4'>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition text-xl'
            aria-label='Toggle dark mode'
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Login */}
          <button
            onClick={onLoginClick}
            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition font-medium'
          >
            Login
          </button>

          {/* Cart */}
          <button
            onClick={handleCartClick}
            className='relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition text-xl'
            aria-label='Cart'
          >
            <FaShoppingCart />
            <span
              ref={cartCountRef}
              className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'
            >
              0
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
            aria-label='Menu'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 space-y-3 font-medium'>
          <a
            href='#about'
            className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
          >
            About
          </a>
          <a
            href='#products'
            className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
          >
            Products
          </a>
          <a
            href='#contact'
            className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
