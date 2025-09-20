import React, { useState } from "react"
import toast from "react-hot-toast"

const initialForm = { name: "", email: "", message: "" }

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!form.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    setErrors({ ...errors, [field]: "" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    setTimeout(() => {
      toast.success("Message sent successfully!")
      setForm(initialForm)
      setErrors({})
      setLoading(false)
    }, 1200)
  }

  return (
    <section id='contact' className='py-16 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-6 text-center text-gray-800'>
          Contact Us
        </h2>
        <p className='text-center text-gray-600 mb-10 max-w-2xl mx-auto'>
          We'd love to hear from you! Fill out the form below and we'll get back
          to you as soon as possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded-2xl p-8 max-w-xl mx-auto space-y-6'
          autoComplete='off'
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium mb-1 text-gray-700'
            >
              Name
            </label>
            <input
              id='name'
              type='text'
              className={`w-full p-3 rounded border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={form.name}
              onChange={handleChange("name")}
              aria-invalid={!!errors.name}
              aria-describedby='name-error'
              disabled={loading}
            />
            {errors.name && (
              <p id='name-error' className='text-red-500 text-sm mt-1'>
                {errors.name}
              </p>
            )}
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium mb-1 text-gray-700'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              className={`w-full p-3 rounded border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={form.email}
              onChange={handleChange("email")}
              aria-invalid={!!errors.email}
              aria-describedby='email-error'
              disabled={loading}
            />
            {errors.email && (
              <p id='email-error' className='text-red-500 text-sm mt-1'>
                {errors.email}
              </p>
            )}
          </div>
          {/* Message Field */}
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium mb-1 text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              rows='5'
              className={`w-full p-3 rounded border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={form.message}
              onChange={handleChange("message")}
              aria-invalid={!!errors.message}
              aria-describedby='message-error'
              disabled={loading}
            />
            {errors.message && (
              <p id='message-error' className='text-red-500 text-sm mt-1'>
                {errors.message}
              </p>
            )}
          </div>
          <button
            type='submit'
            className={`w-full py-3 px-6 rounded-xl font-semibold transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contact
