import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Process from './pages/process';
import Contact from './pages/contact';
import Error from './pages/error';

function App() {

  const routes = (
    <>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/process' element={<Process />} />
      <Route path='/contact' element={<Contact />} />
    </>
  )

  return (
    <>
      <Routes>
        {routes}
        <Route path="/:error" element={<Error />} />
      </Routes>
    </>
  )
}

export default App;