import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToDoList from './ToDoList/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ToDoList/>
    {/* <App /> */}
  </React.StrictMode>,
)
