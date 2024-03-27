import { useState } from 'react'
import Navbar from '../components/NavBar.js'
import Banner from '../components/Banner'
import Footer from '../components/Footer.js'

const Home = () => {

  return (
    <>
      <Banner />
      <Navbar />
      <div className='content'>
        <h1>Let's create your vision together.</h1>
        <p>Wolf Pup Devs is a small team of talented individuals committed to understanding your needs and using our combined expertise to turn your creative vision into reality.</p>
        <p>We will personally walk you through every step of the process, from choosing a layout and color scheme, to implementing desired auxiliary features such as Google Maps, user authentication, and payment integration.</p>
        <p>Please do not hesitate to reach out and schedule a complimentary 20-minute consultation with our team. We would love to enter into a creative headspace together and discuss anything you would like, from design principles to technical details.</p>
        <p>We sincerely hope that you will find the best web development team for your needs.</p>
        <p>Thank you for your interest in collaborating with Wolf Pup Devs.</p>
      </div>
      <Footer />
    </>
    
  )
}

export default Home