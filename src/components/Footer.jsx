import React from 'react'
import './footer.css'
import logo from '/vite.svg'

const Footer = () => {
  return (
    <div className='footer p-6 grid md:grid-cols-2 px-4 md:px-44'>
      <div className="footer__left flex flex-col mb-6 md:mb-0">
        <div className="footer__company mb-6 flex">
          <img src={logo} alt="logo" className='mr-2' />
          <p className='text-2xl text-white'>COMPANY</p>
        </div>
        <div className="select__branch md:w-80 bg-white h-68 p-4">
          <select name="" id="" className='mb-8'>
            <option value="1">Lorem ipsum dolor sit.</option>
            <option value="1">Lorem ipsum dolor sit.</option>
            <option value="1">Lorem ipsum dolor sit.</option>
            <option value="1">Lorem ipsum dolor sit.</option>
          </select>

          <p className='title-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem accusamus iusto reprehenderit earumm. iusto reprehenderit earumm iusto reprehen</p>
        </div>
      </div>

      <div className="footer__right">
        <p className='p-4 py-2 font-semibold text-lg text-white'>Who We Are</p>
        <p className='p-4 py-2 font-semibold text-lg text-white'>Our Values</p>
        <p className='p-4 py-2 font-semibold text-lg text-white'>The Perks</p>
      </div>
    </div>
  )
}

export default Footer