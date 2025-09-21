import React from "react"
import ProductCard from "./ProductCard"
import { products } from "../products/products"

const ProductGrid = ({ onAddToCart }) => {
  const latest = products.slice(-3) // Latest 3 products
  return (
    <section id='products' className='py-12 bg-gray-50 '>
      <div className='max-w-6xl mx-auto px-4 '>
        <h2 className='text-3xl font-bold mb-8 text-center'>Products</h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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
