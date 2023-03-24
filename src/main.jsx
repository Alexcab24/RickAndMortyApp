import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RandMApp from '../RandMApp'
import '.././styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
        <RandMApp /> 
   </StrictMode>
  
   
)
