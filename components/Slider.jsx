import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"

const Slider = () => {
  return (
    <Carousel className='h-[700px]'>
      <Carousel.Item className='h-[700px]'>
        <Image
          src='/images/slider1.jpeg'
          alt='wef'
          fill
          className='object-cover !w-full !h-[700px]'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[700px]'>
        <Image
          src='/images/slider2.jpeg'
          alt='wef'
          fill
          className='object-cover !w-full !h-[700px]'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[700px]'>
        <Image
          src='/images/slider3.jpg'
          alt='wef'
          fill
          className='object-cover !w-full !h-[700px]'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
