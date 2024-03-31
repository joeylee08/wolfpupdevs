import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import pocketbone from '../images/pocketbone.jpg'

const Contact = () => {

  const fsContact = yup.object().shape({
    email: yup.string().required('Please enter a valid email.'),
    message: yup.string().required('Please enter a message.')
  })

  const formikContact = useFormik({
    initialValues: {
      email: '',
      message: ''
    },
    validationSchema: fsContact,
    onSubmit: (values) => {
      alert('penis')
    }
  })

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
        <div id='contactBox'>
          <h1>Contact Us Today</h1>
          <p>Please do not hesitate to reach out to our team and schedule your complimentary 20-minute consultation. We will get back to you within 24 hours. Thank you.</p>
          <br/>
          <form className='contactForm'>
            <label htmlFor='email'>Email: </label>
            <input id='email' type='text'></input>
            <br/>
            <label htmlFor='notes'>Tell us a little about your project: </label>
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