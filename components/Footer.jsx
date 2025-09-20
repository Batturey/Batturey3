// components/Footer.jsx

import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-gray-300 mt-16'>
      <div className='max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div>
          <h2 className='text-2xl font-bold text-white mb-4'>Batturey</h2>
          <p className='text-sm leading-relaxed text-gray-400'>
            Batturey provides top-tier tech products and solutions for modern
            digital life. Stay powered, stay ahead.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='/about' className='hover:text-white transition'>
                About Us
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-white transition'>
                Contact
              </a>
            </li>
            <li>
              <a href='/privacy' className='hover:text-white transition'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/terms' className='hover:text-white transition'>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Contact</h3>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-center'>
              <HiOutlinePhone className='mr-2 text-blue-400' />
              <a href='tel:+123456789' className='hover:text-white'>
                +97688476580
              </a>
            </li>
            <li className='flex items-center'>
              <HiOutlineMail className='mr-2 text-blue-400' />
              <a href='mailto:info@batturey.com' className='hover:text-white'>
                battorbatbaatar7@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition'
            >
              <FaTwitter />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition'
            >
              <FaInstagram />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition'
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700 py-4 text-center text-sm text-gray-500'>
        &copy; {currentYear} Batturey. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
