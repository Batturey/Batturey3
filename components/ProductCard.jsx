import React, { useRef, useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"

const ProductCard = ({ product }) => {
  const quantityRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const updateCartCount = (cart) => {
    const countEl = document.querySelector("header span")
    if (countEl) {
      countEl.innerText = cart.reduce((sum, p) => sum + p.quantity, 0)
    }
  }

  const addToCart = () => {
    const quantity = parseInt(quantityRef.current.value)

    if (isNaN(quantity) || quantity < 1) {
      toast.error("Please enter a valid quantity.")
      return
    }

    setLoading(true)

    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      const existingIndex = cart.findIndex((p) => p.id === product.id)

      if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity
      } else {
        cart.push({ ...product, quantity })
      }

      localStorage.setItem("cart", JSON.stringify(cart))
      updateCartCount(cart)

      toast.success(`${product.name} added to cart!`)
    } catch (err) {
      toast.error("Failed to add to cart.")
    } finally {
      setLoading(false)
    }
  }

  const adjustQuantity = (delta) => {
    const current = parseInt(quantityRef.current.value) || 1
    const newQty = Math.max(1, current + delta)
    quantityRef.current.value = newQty
  }

  return (
    <div className='bg-white rounded-2xl shadow hover:shadow-lg transition-transform transform hover:scale-105 p-6 flex flex-col w-full max-w-sm mx-auto'>
      <div className='relative h-48 w-full mb-4'>
        <Image
          src={product.image || "/images/ip16.jpg"}
          alt={product.name}
          className='object-cover rounded-xl'
          layout='fill'
        />
      </div>

      <h3 className='text-xl font-semibold mb-1'>{product.name}</h3>
      <p className='text-gray-600 mb-2 flex-1 text-sm'>{product.description}</p>

      <div className='flex items-center mt-2 space-x-2'>
        <button
          type='button'
          onClick={() => adjustQuantity(-1)}
          className='px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded'
        >
          –
        </button>
        <input
          type='number'
          min='1'
          defaultValue='1'
          ref={quantityRef}
          className='w-16 border p-1 rounded text-center'
        />
        <button
          type='button'
          onClick={() => adjustQuantity(1)}
          className='px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded'
        >
          +
        </button>
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <span className='text-lg font-bold'>${product.price.toFixed(2)}</span>
        <button
          onClick={addToCart}
          disabled={loading}
          className={`px-4 py-2 rounded-xl text-white transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
