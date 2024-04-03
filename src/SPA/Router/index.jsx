import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contactus from '../pages/contactus'
import About from '../pages/about'
import AppLayout from '../layout'
function Index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={AppLayout}>
            <Route path='/Home' element={Home}/>
            <Route path='/AboutUs' element={About}/>
            <Route path='/ContactUs' element={Contactus}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Index