"use client"

import React from "react"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import CartSidebar from "../components/CartSidebar"
import Slider from "../components/Slider"
import Footer from "../components/Footer"
import About from "../components/About"
import Contact from "../components/Contact"
import LoginModal from "../components/LoginModal"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position='top-center' />
      <Component {...pageProps} />
    </>
  )
}

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    description: "Titanium build, A18 chip",
    price: 1299,
    image: "/images/iphone16pro.jpg",
  },
  {
    id: 2,
    name: "MacBook Air M4",
    description: "15-inch Liquid Retina",
    price: 1899,
    image: "/images/macbookairm4.jpg",
  },
  {
    id: 3,
    name: "Apple Watch Ultra 3",
    description: "36h battery",
    price: 899,
    image: "/images/watchultra3.jpg",
  },
]

export default function HomePage() {
  const openLogin = () => {
    const modal = document.getElementById("login-modal")
    if (modal) modal.classList.remove("hidden")
  }

  return (
    <>
      <Navbar onLoginClick={openLogin} />
      <LoginModal />
      <Slider />
      <About />
      <section id='products' className='py-12 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <Contact />
      <CartSidebar />
      <Footer />
    </>
  )
}
