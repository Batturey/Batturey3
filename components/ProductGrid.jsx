import React from "react"
import ProductCard from "./ProductCard"

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
    description: "36h battery life",
    price: 899,
    image: "/images/watchultra3.jpg",
  },
  {
    id: 4,
    name: "iPad Pro M3",
    description: "12.9-inch Liquid Retina",
    price: 1099,
    image: "/images/ipadpro.jpg",
  },
  {
    id: 5,
    name: "AirPods Max",
    description: "Noise cancelling headphones",
    price: 599,
    image: "/images/airpodsmax.jpg",
  },
]

const ProductGrid = ({ onAddToCart }) => {
  const latest = products.slice(-3) // Latest 3 products
  return (
    <section id='products' className='py-12 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Products</h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-6'>
          {latest.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
        <div className='text-center'>
          <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
