import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Contact from "./components/ContactUs";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= { <Layout/> } >
      <Route path='/' element={ <Home/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/contactUs' element={ <Contact/> }/>
      <Route path='user/:id' element={ <Users/> }/>
    </Route>
  )
)
export default function App() {
  return (
    <>
          <RouterProvider router= {route} />
          </>
  );
}
