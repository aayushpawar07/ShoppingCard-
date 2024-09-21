import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import  { BrowserRouter } from 'react-router-dom'
import ShoppingCardProvider from './context/Index.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ShoppingCardProvider>  
        <App/>
  </ShoppingCardProvider>
  </BrowserRouter>


)
