import React from 'react'
import Navbar from './Navbar'
import {TfiArrowDown} from 'react-icons/tfi'
import {Link} from "react-scroll";

function Showcase() {
  return (
    <header className="h-screen bg-showcase bg-cover bg-no-repeat bg-center shadow-overlay">
      <div className='md:container mx-auto h-full px-6'>
        <Navbar />
        <div className='flex justify-center content-center items-center h-full text-white'>
          <div className='text-center'>
            <h2 className='font-poppins text-5xl mb-7'>Welcome to HappyReader</h2>
            <p className='font-montserrat text-xl leading-normal mb-10 pb-4 md:px-20 md:text-center px-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque numquam dicta perferendis quos, quibusdam quae maxime aliquam quaerat accusamus tenetur molestiae! Atque perferendis excepturi ratione quidem deserunt sequi.</p>
            <Link to="categories" spy={true} smooth={true} duration={500} >
              <TfiArrowDown className='hover:text-white hover:bg-primary animate-bounce mx-auto text-7xl rounded-full p-4 box-border'></TfiArrowDown>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Showcase