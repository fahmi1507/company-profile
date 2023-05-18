import React from 'react'
import acc from '../assets/Accesories.svg'
import exhaust from '../assets/exhaust.svg'
import group from '../assets/Group.svg'
import Slider from "react-slick";
import './carousel.css'


const Specialty = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='special py-8 px-4'>
      <div className='p-4 max-w-5xl  mx-auto bg-white'>
        <h3 className='title-color font-bold text-2xl mb-4 text-center'>OUR SPECIALTY</h3>

        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste sed quae dolor voluptatum facere quidem doloribus eos repellendus? Doloribus reprehenderit incidunt quaerat error, veniam cupiditate non soluta aliquam perferendis rro quas quia ex autem beatae. Officiis voluptas quos iusto tenetur illum dolorum quam fugiat?</p>

        <div className="hidden md:grid grid-cols-3 gap-3">
          <div className="flex items-center justify-center flex-col w-100">
            <img src={acc} alt="acc" className='mb-4' />
            <p>Accesories</p>
          </div>
          <div className="flex items-center justify-center flex-col w-100">
            <img src={exhaust} alt="" className='mb-4' />
            <p>Exhaust</p>
          </div>
          <div className="flex items-center justify-center flex-col w-100">
            <img src={group} alt="" className='mb-4' />
            <p>Speed Improvement</p>
          </div>
        </div>

        <Slider className='md:hidden' {...settings}>
          <div className="carousel__item flex items-center justify-center flex-col w-100">
            <img src={acc} alt=""  className='mb-4' />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="carousel__item flex items-center justify-center flex-col w-100">
            <img src={acc} alt="" className='mb-4' />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="carousel__item flex items-center justify-center flex-col w-100">
            <img src={acc} alt="" className='mb-4' />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Slider>

      </div>
    </div>
  )
}

export default Specialty