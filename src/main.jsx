import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import SimpleSlider from './Accordion_ImageCarousel/Index.jsx'
import Weather from './WeatherApp/Weather.jsx'
// import CenterScreen from './BMI/CenterScreen.jsx'
// import Index from './SPA/Router/index.jsx'
// import Index29 from './29/index.jsx'
// import Positions from './Position/index.jsx'
// import ToDoList from './ToDoList/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SimpleSlider/> */}
    <Weather/>
    {/* <CenterScreen/> */}
    {/* <Index/> */}
    {/* <Positions></Positions> */}
    {/* <Index29/> */}
      {/* <ToDoList/> */}
    {/* <App /> */}
  </React.StrictMode>,
)
