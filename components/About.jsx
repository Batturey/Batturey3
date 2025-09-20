import React from "react"

const About = () => (
  <section id='about' className='py-12 bg-white'>
    <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8'>
      <img
        src='/images/ip16.jpg'
        alt='About AppleShop'
        className='w-full md:w-1/2 rounded-xl shadow'
      />
      <div>
        <h2 className='text-3xl font-bold mb-4'>About AppleShop</h2>
        <p className='text-gray-600'>
          Welcome to AppleShop! We provide latest Apple products with high
          quality service. Our store is designed to give you best shopping
          experience with responsive UI, product categories, and secure
          checkout.
        </p>
      </div>
    </div>
  </section>
)

export default About
