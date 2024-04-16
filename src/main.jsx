import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'                                                   
import PasswordG from './PasswordG/PasswordG'
// import App from './ReactRounter/App'

// import SignUp from './SignUp/SignUp.jsx'
// import SimpleSlider from './Accordion_ImageCarousel/Index.jsx'
// import Weather from './WeatherApp/Weather.jsx'
// import CenterScreen from './BMI/CenterScreen.jsx'
// import Index from './SPA/Router/index.jsx'
// import Index29 from './29/index.jsx'
// import Positions from './Position/index.jsx'
// import ToDoList from './ToDoList/index.jsx'
// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       }, {
//         path: "about",
//         element: <About/>
//       }, {
//         path: "/contactUs",
//         element: <Contact/>
//       }
//     ]
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordG/>
    {/* <App/> */}
    {/* <SimpleSlider/> */}
    {/* <Weather/> */}
    {/* <CenterScreen/> */}
    {/* <Index/> */}
    {/* <Positions></Positions> */}
    {/* <Index29/> */}
      {/* <ToDoList/> */}
    {/* <App /> */}
  </React.StrictMode>,
)
