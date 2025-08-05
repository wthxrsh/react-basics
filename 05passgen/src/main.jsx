import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body className='bg-gray-800'>
      <App/>
    </body>
x
  </StrictMode>,
)
