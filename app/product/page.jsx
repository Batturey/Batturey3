import { products } from "../products/products"

const ProductPage = () => {
  const product = products[0] // Get the first product for this example

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-64 object-cover mb-4'
      />
      <p className='text-gray-600 mb-4'>{product.description}</p>
      <span className='text-lg font-bold'>${product.price.toFixed(2)}</span>
    </div>
  )
}

export default ProductPage
import React from "react"
