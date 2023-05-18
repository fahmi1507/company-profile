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

  const specialty = [
    { id: '1', src: acc, title: 'Accesories'},
    { id: '1', src: exhaust, title: 'exhaust'},
    { id: '1', src: group, title: 'Group'},
  ]

  return (
    <div className='special py-8 px-4'>
      <div className='p-4 md:p-8 max-w-5xl  mx-auto bg-white'>
        <h3 className='title-color font-bold text-2xl mb-4 text-center'>OUR SPECIALTY</h3>

        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste sed quae dolor voluptatum facere quidem doloribus eos repellendus? Doloribus reprehenderit incidunt quaerat error, veniam cupiditate non soluta aliquam perferendis rro quas quia ex autem beatae. Officiis voluptas quos iusto tenetur illum dolorum quam fugiat?</p>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {
            specialty.map(i => (
              <div key={i.id} className="flex items-center justify-center flex-col w-100">
                <img src={i.src} alt="acc" className='mb-4' />
                <p className='capitalize'>{i.title}</p>
              </div>
            ))
          }
        </div>

        <Slider className='md:hidden' {...settings}>
          {
            specialty.map(i => (
              <div key={i.id} className="carousel__item flex items-center justify-center flex-col w-100">
                <img src={i.src} alt=""  className='mb-4' />
                <p>{i.title}</p>
              </div>
            ))
          }
        </Slider>

      </div>
    </div>
  )
}

export default Specialty