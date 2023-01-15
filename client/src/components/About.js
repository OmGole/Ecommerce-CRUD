import React from 'react'
// import about from '../assets/img/about.jpg';

function About() {
  return (
    <div className='bg-secondary text-white'>
      <div className='md:container mx-auto flex '>
      <div className='flex-1 py-20'>
      <h1 className='font-poppins text-4xl text-center mb-9'>About Us</h1>
      <p className='leading-6 text-xl px-9 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quas aperiam quis repudiandae fuga, incidunt mollitia voluptates quo corrupti tempore autem et laborum impedit. Sunt dignissimos veniam harum error odit quo hic delectus, architecto iste dolore necessitatibus culpa alias sed tenetur. Ab aliquam nulla veniam ea laborum, vitae quasi necessitatibus! Ab aliquam nulla veniam ea laborum, vitae quasi necessitatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    <div  className='flex-1 '>
      {/* <img src={about} alt="" className='w-full object-cover'/> */}
    </div>
    </div>
    </div>
  )
}

export default About