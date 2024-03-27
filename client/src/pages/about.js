import { useState } from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const About = () => {

  return (
    <>
      <Banner />
      <NavBar />
      <div className='content'>
        <h1>Empathy, Collaboration, and Excellence</h1>
        <p>Wolf Pup Devs was founded in 2024 by Joseph Lee, a full stack software developer who holds a B.A. in English from California State University: Fullerton. After having worked on several software development teams, Joseph began to understand the necessity of empathetic communication and respectful collaboration not only between team members, but between developers and clients, as well.</p>
        <p>At Wolf Pup Devs, we firmly believe that the client is a crucial and respected member of the team. We place a strong emphasis on understanding the client's vision and demonstrating through our actions that their opinions are both heard and valued. We seek to leverage our combined expertise to empower the client to make informed decisions, then work with them to make their vision a reality.</p>
        <h1>Full Stack Web Application</h1>
        <p>Our team currently uses the latest version of React to create our entire frontend. Our backend code is written using Python with Flask. As a plus, our developers are constantly keeping up with the latest industry standard technologies such as Marshmallow for serialization and Yup / Formik for validation, ensuring that your code is future-proofed and easily maintainable for the lifetime of your business.</p>
        <h1>Schedule a Complimentary Consultation</h1>
        <p>We offer a complimentary 20-minute Zoom consultation with all prospective clients. This will be an opportunity for you to meet our team and discuss your creative vision. We simply want to connect and see if we would be a good fit for your project. Whether you go with our team or another, we are confident that this will be a meaningful time of generative discussion. We look forward to hearing from you.</p>
      </div>
      <Footer />
    </>
  )
}

export default About