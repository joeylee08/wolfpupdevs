import { useState } from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import pocketbone from '../images/pocketbone.jpg'

const Process = () => {

  return (
    <>
      <Banner />
      <NavBar />
      <div className='content'>
        <h1>The Wolf Pup Process</h1>
        <h2>Step 1: General Planning</h2>
        <p>Our team meets with the client to discuss their vision and develop an understanding of their vision. Will the page simply be a means of presenting information, or will there be other features like login and logout? By the end of this step, our team should have a solid understanding of the client's needs.</p>
        <h2>Step 2: Backend Models and Tables</h2>
        <p>This part is a little more technical, but here is where our team will create the backend models and database tables necessary to keep track of any persistent data such as usernames, passwords, emails, direct messages, profile pictures, user preferences, etc.</p>
        <h2>Step 3: Frontend Layout and UI</h2>
        <p>After the General Planning step, this is where the most amount of client interaction will occur. This step is where we go into granular detail about color schemes, page layouts, structures of navigation bars, menus, anything and everything to do with the visual aspects of the page.</p>
        <h2>Step 4: Core Functionality</h2>
        <p>Most of the user-driven functionality will be programmed in this step. This is where our team will address needs such as fetching and dynamically rendering data, programming the frontend elements to persist information to a database, and implementing security and error handling.</p>
        <h2>Step 5: UX and Additional Features</h2>
        <p>Here is where the project comes alive. We make the page polished and responsive by implementing color toggling, collapsing menus, page transitions, etc. This is the final step before deployment.</p>
      </div>
      <Footer />
    </>
  )
}

export default Process