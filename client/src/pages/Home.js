import React from 'react'
import Showcase from '../components/Showcase'
import Categories from '../components/Categories'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <>
    <Showcase/>
          <Categories/>
          {/* <About/> */}
          <Contact/>
          <Footer/>
    </>
  )
}

export default Home