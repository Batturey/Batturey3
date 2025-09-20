"use client"
import React, { useEffect, useState } from "react"
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
]

const Navbar = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // Initialize theme and cart count
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const count = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartCount(count)
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle("dark", newMode)
    localStorage.setItem("theme", newMode ? "dark" : "light")
  }

  // Scroll to section
  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  // Toggle cart sidebar
  const handleCartClick = () => {
    const sidebar = document.getElementById("cart-sidebar")
    if (sidebar) sidebar.classList.toggle("translate-x-full")
  }

  return (
    <header className='bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div
          className='text-2xl font-bold text-blue-600 dark:text-white cursor-pointer hover:opacity-80 transition'
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AppleShop
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-6 font-medium'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right-side Icons */}
        <div className='flex items-center space-x-4'>
          {/* Search Bar */}
          <input
            type='text'
            placeholder='Search...'
            className='hidden md:block px-3 py-1.5 border rounded-md text-sm dark:bg-gray-800 dark:text-white'
          />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className='text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
            aria-label='Toggle dark mode'
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className='text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
              aria-label='Profile'
            >
              <FaUserCircle />
            </button>
            {profileOpen && (
              <div className='absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded shadow-lg py-2 z-20'>
                <button
                  onClick={onLoginClick}
                  className='block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                >
                  Login
                </button>
                <button className='block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>
                  Profile
                </button>
                <button className='block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={handleCartClick}
            className='relative text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
            aria-label='Cart'
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
            aria-label='Toggle menu'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 px-6 py-4 font-medium overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className='block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition'
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
