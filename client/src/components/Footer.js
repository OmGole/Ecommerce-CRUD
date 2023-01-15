import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {SlSocialInstagram} from 'react-icons/sl'
import {SlSocialGithub} from 'react-icons/sl'

function Footer() {
  return (
    <footer className='bg-secondary text-white py-9'>
      <div className='md:container mx-auto flex justify-center mb-9'>
        <div className='flex justify-center'>
        <div>
          <a href="https://www.linkedin.com/in/om-gole-36407521a" target="_blank">

          <SlSocialLinkedin className='hover:bg-white hover:text-secondary text-6xl md:mx-5 mx-3 rounded-full px-4 border-white border-2'/>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/om_gole/" target="_blank">

          <SlSocialInstagram className='hover:bg-white hover:text-secondary text-6xl md:mx-5 mx-3  rounded-full px-4 border-white border-2'/>
          </a>
        </div>
        <div>
          <a href="https://github.com/OmGole" target="_blank">

          <SlSocialGithub className='hover:bg-white hover:hover:text-secondary text-6xl md:mx-5 mx-3  rounded-full px-4 border-white border-2'/>
          </a>
        </div>
        </div>
        
      </div>
      <div >
        <p className='text-center text-xl'>
          @2022 Happy Reader
        </p>
        </div>
    </footer>
  )
}

export default Footer