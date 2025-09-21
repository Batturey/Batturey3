"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaUserCircle,
  FaCog,
} from "react-icons/fa"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/product", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartCount(cart.reduce((s, i) => s + i.quantity, 0))
  }, [])

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.theme = next ? "dark" : "light"
  }

  const toggleCart = () => {
    const sidebar = document.getElementById("cart-sidebar")
    sidebar?.classList.toggle("translate-x-full")
  }

  return (
    <header className='sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:to-gray-900 backdrop-blur-lg shadow-lg transition-all duration-300'>
      <div className='container mx-auto max-w-7xl px-6 py-3 flex justify-between items-center'>
        {/* Logo */}
        <Link href={"/"}>
          <button className='text-2xl md:text-3xl font-extrabold text-white hover:text-yellow-300 transition-all duration-300'>
            AppleShop
          </button>
        </Link>

        {/* Desktop Links */}
        <nav className='hidden md:flex space-x-12 font-semibold text-white'>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className='relative px-3 py-2 rounded-md !text-white !no-underline  hover:bg-white/20 transition-all duration-300 after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-0.5 after:bg-yellow-300 after:transition-all hover:after:w-1/2 hover:after:left-1/4'
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className='flex items-center space-x-5'>
          <button
            onClick={toggleDark}
            className='text-xl md:text-2xl text-white hover:text-yellow-300 transition-transform duration-200 hover:scale-110'
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className='relative'>
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className='text-xl md:text-2xl text-white hover:text-yellow-300 transition-transform duration-200 hover:scale-110'
            >
              <FaCog />
            </button>
            {settingsOpen && (
              <div className='absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50'>
                <button className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'>
                  Settings
                </button>
                <button className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'>
                  Preferences
                </button>
              </div>
            )}
          </div>
          <div className='relative'>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className='text-xl md:text-2xl text-white hover:text-yellow-300 transition-transform duration-200 hover:scale-110'
            >
              <FaUserCircle />
            </button>
            {profileOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50'>
                <button
                  onClick={onLoginClick}
                  className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'
                >
                  Login / Register
                </button>
                <button className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'>
                  Profile
                </button>
                <button className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'>
                  Logout
                </button>
              </div>
            )}
          </div>{" "}
          */
          {/* Cart */}
          <button
            onClick={toggleCart}
            className='relative text-xl md:text-2xl text-white hover:text-yellow-300 transition-transform duration-200 hover:scale-110'
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-md animate-pulse'>
                {cartCount}
              </span>
            )}
          </button>
          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-xl text-white hover:text-yellow-300 transition-transform duration-200 hover:scale-110'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-72 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className='block px-6 py-4 text-white font-semibold text-lg hover:bg-white/20 rounded-md transition-all duration-300'
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
