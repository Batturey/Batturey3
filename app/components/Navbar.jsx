import React, { useState } from "react";

const Navbar = ({ cartCount, onToggleCart, onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          AppleShop
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Login */}
          <button
            onClick={onLoginClick}
            className="text-gray-700 hover:text-blue-600"
          >
            Login
          </button>

          {/* Cart */}
          <button
            onClick={onToggleCart}
            className="relative text-gray-700 hover:text-blue-600"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-50 px-6 py-4 space-y-2">
          <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#products" className="block text-gray-700 hover:text-blue-600">Products</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
