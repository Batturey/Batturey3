import React, { useState, useEffect } from "react"

const images = [
  "/images/ip16.jpg",
  "/images/ip16.jpg",
  "/images/ip16.jpg",
  "/images/ip16.jpg",
]

const Slider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-64 md:h-96 overflow-hidden'>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt='slider'
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}

export default Slider
