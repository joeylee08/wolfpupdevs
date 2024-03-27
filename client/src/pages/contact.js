import { useState } from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import pocketbone from '../images/pocketbone.jpg'

const Contact = () => {

  return (
    <>
      <Banner />
      <NavBar />
      <div className='content'>
        <img 
            className='image'
            src={pocketbone}
            alt='pocket sleeping with bone'
        />
        <h1>Contact our team today.</h1>
        <p>Please do not hesitate to reach out to our team with as much or as little detail as you feel comfortable sharing. We will generally get back to you within 24 hours. Thank you.</p>
        <div className='formBox'>
          <form className='contactForm'>
            <label htmlFor='email'>Email: </label>
            <input id='email' type='text'></input>
            <br/>
            <label htmlFor='notes'>Notes: </label>
            <textarea id='notes' type='text'></textarea>
            <br/>
            <button id='submit' type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact