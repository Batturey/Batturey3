import React, { useState, useEffect } from "react"
import toast from "react-hot-toast"

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) setUser(storedUser)
  }, [])

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Email and password are required.")
      return false
    }
    return true
  }

  const handleLogin = () => {
    if (!validateForm()) return

    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser(storedUser)
      toast.success("Login successful")
      onClose()
    } else {
      toast.error("Invalid email or password")
    }
  }

  const handleRegister = () => {
    if (!validateForm()) return

    const newUser = { email, password }
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser)
    toast.success("Registered successfully")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-xl p-6 w-96 shadow-lg animate-fade-in'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>
            {activeTab === "login" ? "Login" : "Register"}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-black text-xl'
          >
            ✖️
          </button>
        </div>

        {/* Tabs */}
        <div className='flex space-x-4 mb-4'>
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 rounded ${
              activeTab === "login"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-2 rounded ${
              activeTab === "register"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className='space-y-3'>
          <input
            type='email'
            placeholder='Email'
            className='border p-2 w-full rounded'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              className='border p-2 w-full rounded pr-10'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500'
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            onClick={activeTab === "login" ? handleLogin : handleRegister}
            className={`w-full py-2 rounded text-white transition ${
              activeTab === "login"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {activeTab === "login" ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
