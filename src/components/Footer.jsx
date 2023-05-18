import React from 'react'
import './footer.css'
import logo from '/vite.svg'

const Footer = () => {
  return (
    <div className='footer p-6 grid md:grid-cols-2 px-4 md:px-44'>
      <div className="footer__left flex flex-col">
        <div className="footer__company mb-6 flex">
          <img src={logo} alt="logo" className='mr-2' />
          <p className='text-2xl text-white'>COMPANY</p>
        </div>
        <div className="select__branch md:w-80 bg-white h-72 p-4">
          <select name="" id="" className='mb-12'>
            <option value="1">Lorem ipsum dolor sit.</option>
            <option value="1">Lorem ipsum dolor sit.</option>
            <option value="1">Lorem ipsum dolor sit.</option>
            <option value="1">Lorem ipsum dolor sit.</option>
          </select>

          <p className='title-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem accusamus iusto reprehenderit earum consequuntur similique dolores aspernatur natus enim.</p>
        </div>
      </div>

      <div className="footer__right">
        <p className='p-4 py-2 font-semibold text-lg text-white'>Who We Are</p>
        <p className='p-4 py-2 font-semibold text-lg text-white'>Who We Are</p>
        <p className='p-4 py-2 font-semibold text-lg text-white'>Who We Are</p>
      </div>
    </div>
  )
}

export default Footer