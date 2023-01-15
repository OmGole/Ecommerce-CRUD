import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'

function Contact() {
  return (
    <div className='py-12 bg-gray-100'>
    <div className='md:container mx-auto'>
      <h1 className='font-poppins text-4xl text-center mb-12'>Contact Us</h1>
      <div className="md:flex w-full">
        <div className="md:mb-0 mb-10 flex-1 text-center text-2xl ">
          <FiPhoneCall className='mx-auto mb-4 text-5xl'/>
          <h2 className='mb-2'>Phone :</h2>
          <p className='text-2xl'>9999-9999</p>
        </div>
        <div className="md:mb-0 mb-10 flex-1 text-center text-2xl">
          <AiOutlineMail className='mx-auto mb-4 text-5xl'/>
          <h2 className='mb-2'>Email :</h2>
          <p className='text-2xl'>johndoe@gmail.com</p>
        </div>
        <div className="md:mb-0 mb-10 flex-1 text-center text-2xl">
          <CiLocationOn className='mx-auto mb-4 text-5xl'/>
          <h2 className='mb-2'>Location :</h2>
          <p className='text-2xl'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact