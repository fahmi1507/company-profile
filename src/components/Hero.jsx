import React from 'react'
import './hero.css'
import left from '../assets/left.svg'
import right from '../assets/right.svg'

const Hero = () => {
  return (
    <section className='hero relative flex justify-center'>
      <img src={left} className='absolute bottom-0 md:hidden w-full' alt="" />
      <img src={right} className='absolute bottom-0 md:hidden w-full'  alt="" />
      <div className="absolute w-64 p-4 bottom-1 md:w-full md:top-12 md:left-4">
        <h3 className='text-3xl font-bold text-white mb-6'>Discover Your Wonder</h3>

        <p className='text-white md:hidden'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sapiente rem ullam ipsamm beatae doloremque omnis aut quis?</p>
      </div>
    </section>
  )
}

export default Hero