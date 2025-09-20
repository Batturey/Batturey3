import React, { useState } from "react"
import toast from "react-hot-toast"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Simulate send
    toast.success("Message sent successfully!")
    setForm({ name: "", email: "", message: "" })
    setErrors({})
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    setErrors({ ...errors, [field]: "" })
  }

  return (
    <section id='contact' className='py-16 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-4xl mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white'>
          Contact Us
        </h2>
        <p className='text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto'>
          We'd love to hear from you! Fill out the form below and we'll get back
          to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-xl mx-auto space-y-6'
        >
          {/* Name Field */}
          <div className='relative'>
            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200'>
              Name
            </label>
            <input
              type='text'
              className={`w-full p-3 rounded border ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={form.name}
              onChange={handleChange("name")}
              aria-invalid={!!errors.name}
              aria-describedby='name-error'
            />
            {errors.name && (
              <p id='name-error' className='text-red-500 text-sm mt-1'>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className='relative'>
            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200'>
              Email
            </label>
            <input
              type='email'
              className={`w-full p-3 rounded border ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={form.email}
              onChange={handleChange("email")}
              aria-invalid={!!errors.email}
              aria-describedby='email-error'
            />
            {errors.email && (
              <p id='email-error' className='text-red-500 text-sm mt-1'>
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className='relative'>
            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200'>
              Message
            </label>
            <textarea
              rows='5'
              className={`w-full p-3 rounded border ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={form.message}
              onChange={handleChange("message")}
              aria-invalid={!!errors.message}
              aria-describedby='message-error'
            />
            {errors.message && (
              <p id='message-error' className='text-red-500 text-sm mt-1'>
                {errors.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            className='w-full py-3 px-6 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
