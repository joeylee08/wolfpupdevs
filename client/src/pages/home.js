import { useState } from 'react'
import Navbar from '../components/NavBar.js'
import Banner from '../components/Banner'

const Home = () => {

  return (
    <>
      <Banner />
      <Navbar />
      <div className='content'>
        <h1>Let's create your vision together.</h1>
        <p>Wolf Pup Devs is a small team of talented individuals committed to understanding your needs and using our combined expertise to make your creative vision become a reality.</p>
        <p>We will personally walk you through every step of the process, from choosing a layout and color scheme, to implementing auxiliary features such as user authentication and payment integration.</p>
        <p>Rest assured that we will be with you, providing empathetic guidance every step of the way.</p>
        <p>Please do not hesitate to reach out and schedule a complimentary 20 minute consulation with our team. We would love to enter into a creative space with you and discuss anything you would like, from basic design principles to more technical details such as password encryption and form validation.</p>
        <p>We ultimately hope that you will find the best web development team for your needs.</p>
        <p>Thank you for your interest in collaborating with Wolf Pup Devs.</p>
      </div>
    </>
    
  )
}

export default Home