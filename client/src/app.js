import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
      <Routes>
        {routes}
        <Route path="/:error" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;