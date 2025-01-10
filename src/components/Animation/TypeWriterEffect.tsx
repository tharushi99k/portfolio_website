import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriterEffect = () => {
  return (
    <TypeAnimation
    sequence={[
      'a Mern Developer',
      1000,
      'a Next JS Developer',
      1000,
      'a UX UI Designer',
      1000,
      
    ]}
    wrapper="span"
    speed={50}
    className='xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-[#01F191] font-bold'
    repeat={Infinity}
  />
  )
}

export default TypeWriterEffect