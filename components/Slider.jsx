import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"

const Slider = () => {
  return (
    <Carousel className='h-[900px]'>
      <Carousel.Item className='h-[900px]'>
        <Image
          src='/images/slider1.jpeg'
          alt='Best Electronics'
          fill
          className='object-cover !w-full !h-[900px]'
        />
        <Carousel.Caption>
          <h3>Discover the Latest Electronics</h3>
          <p>Find top-quality gadgets and devices for your everyday needs.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[900px]'>
        <Image
          src='/images/slider2.jpeg'
          alt='Home Essentials'
          fill
          className='object-cover !w-full !h-[900px]'
        />
        <Carousel.Caption>
          <h3>Upgrade Your Home</h3>
          <p>
            Stylish and practical products to make your home comfortable and
            modern.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[900px]'>
        <Image
          src='/images/slider3.jpg'
          alt='Seasonal Offers'
          fill
          className='object-cover !w-full !h-[900px]'
        />
        <Carousel.Caption>
          <h3>Exclusive Seasonal Offers</h3>
          <p>
            Don’t miss out on amazing deals available for a limited time only!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
