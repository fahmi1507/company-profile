import React, { useState } from 'react'
import logo from '/vite.svg'

const Navbar = () => {
  const [isVisible, setIsvible] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<a href="#" className="flex items-center py-4 px-2">
								<img src={logo} alt="Logo" className="h-8 w-8 mr-2"/>
								<span className="font-semibold text-gray-500 text-lg">COMPANY</span>
							</a>
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<a href="" className="py-4 px-2 text-sky-500 border-b-4 border-sky-500 font-semibold ">Home</a>
							<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-sky-500 transition duration-300">Services</a>
							<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-sky-500 transition duration-300">About</a>
							<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-sky-500 transition duration-300">Contact Us</a>
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-sky-500 hover:text-white transition duration-300">Log In</a>
						<a href="" className="py-2 px-2 font-medium text-white bg-sky-500 rounded hover:bg-sky-400 transition duration-300">Sign Up</a>
					</div>
					<div className="md:hidden flex items-center">
						<button onClick={() => setIsvible(!isVisible)} className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-gray-500 hover:text-sky-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div className={`md:hidden ${!isVisible && 'hidden'}`}>
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-sky-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-sky-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-sky-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-sky-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
  )
}

export default Navbar