// Index.js
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contactus from '../pages/Contactus'
import About from '../pages/About'
import AppLayout from '../layout/AppLayout'
import Sign from '../pages/Sign'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/AboutUs' element={<About />} />
          <Route path='/ContactUs' element={<Contactus />} />
          <Route path='/signin' element={<Sign/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Index;
