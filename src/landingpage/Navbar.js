import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

const menuRef = useRef(null);

const handleMenuClick = (event) => {
  event.target.classList.toggle('hamburger-active');
  menuRef.current.classList.toggle('hidden');
}
  
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
    <div className="container">
      <div className="flex items-center justify-between relative">
        <div className="px-4 ">
          <a href="#home" className="font-bold text-lg text-primary block py-6">ContainIT</a>
        </div>
        <div className="flex items-center px-4">
          <button onClick={handleMenuClick} id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
            <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span class="hamburger-line transition duration-300 ease-in-out "></span>
            <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>

          <nav id="nav-menu" ref={menuRef} className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none">
            <ul className="block lg:flex">

              <li className="group">
                <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
              </li>

              <li className="group">
                <a href="#service" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Our Service</a>
              </li>
              
              <li className="group">
                <a href="#review" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Review</a>
              </li>

              <li className="group">
                <a href="#footer" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact Us</a>
              </li>

              <li className="group">
                <a href="#join" className='text-base text-white py-2 mx-8 flex group-hover:text-white p-4 bg-primary rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out'>
                <Link to="/signup"> Join Us! </Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}
