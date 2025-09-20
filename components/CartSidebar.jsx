import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Image from "next/image"

const CartSidebar = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(savedCart)
  }, [isOpen])

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCart(updatedCart)

    // Update navbar count
    const countEl = document.querySelector("header span")
    if (countEl) {
      countEl.innerText = updatedCart.reduce((sum, p) => sum + p.quantity, 0)
    }
  }

  const removeItem = (index) => {
    const updatedCart = [...cart]
    const removedItem = updatedCart.splice(index, 1)[0]
    updateCartStorage(updatedCart)
    toast.success(`Removed ${removedItem.name} from cart`)
  }

  const clearCart = () => {
    updateCartStorage([])
    toast.success("Cart cleared")
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div
      id='cart-sidebar'
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className='p-6 flex justify-between items-center border-b bg-gray-50'>
        <h3 className='text-xl font-bold'>Your Cart</h3>
        <button
          onClick={onClose}
          className='text-gray-600 hover:text-black text-xl'
          aria-label='Close cart sidebar'
        >
          ✖️
        </button>
      </div>

      {/* Cart Items */}
      <div className='p-6 flex flex-col h-[calc(100%-160px)] overflow-y-auto custom-scrollbar'>
        {cart.length === 0 ? (
          <div className='flex flex-col items-center mt-16 text-center text-gray-500'>
            <Image
              src='/images/empty-cart.png'
              width={120}
              height={120}
              alt='Empty cart'
              className='mb-4'
            />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <ul className='space-y-4'>
            {cart.map((item, index) => (
              <li
                key={index}
                className='flex justify-between items-start border-b pb-3'
              >
                <Image
                  src={item.image || "/images/ip16.jpg"}
                  alt={item.name}
                  width={64}
                  height={64}
                  className='rounded-lg object-cover mr-3'
                />
                <div className='flex-1'>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-sm text-gray-500'>
                    Qty: {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                  <p className='text-sm font-semibold mt-1'>
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className='text-red-500 hover:text-red-700 text-sm ml-2'
                  aria-label={`Remove ${item.name}`}
                >
                  ✖️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className='p-6 border-t bg-gray-50 sticky bottom-0'>
          <div className='flex justify-between font-semibold text-lg mb-3'>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            className='w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition mb-2'
            onClick={() => toast.success("Proceeding to checkout...")}
          >
            Checkout
          </button>
          <button
            onClick={clearCart}
            className='w-full text-sm text-red-500 hover:text-red-700 mt-1'
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  )
}

export default CartSidebar
