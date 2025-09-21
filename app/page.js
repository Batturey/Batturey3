"use client"

import React from "react"
import ProductCard from "../components/ProductCard"
import CartSidebar from "../components/CartSidebar"
import Slider from "../components/Slider"
import LoginModal from "../components/LoginModal"

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    description: "Titanium build, A18 chip",
    price: 1299,
    image: "/images/ip172.jpg",
  },
  {
    id: 2,
    name: "MacBook Air M4",
    description: "15-inch Liquid Retina",
    price: 1899,
    image: "/images/macbook.jpg",
  },
  {
    id: 3,
    name: "Apple Watch Ultra 3",
    description: "36h battery",
    price: 899,
    image: "/images/apwatch.jpg",
  },
]

export default function HomePage() {
  return (
    <>
      <LoginModal />
      <Slider />
      <section id='products' className='py-12 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <CartSidebar />
    </>
  )
}
