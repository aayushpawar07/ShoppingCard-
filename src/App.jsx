import { useState } from 'react'
import  {Route , Routes} from 'react-router-dom'
import ProductList from './Pages/ProductList'
import ProductDetails from './Pages/ProductDetails'
import CartList from './Pages/CartList'
import { fromJSON } from 'postcss'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Homepage></Homepage>}> </Route>
    
    <Route path = '/productlist' element = {<ProductList></ProductList>}   ></Route>

    <Route  path = '/productDetails/:id' element = {<ProductDetails></ProductDetails>}  ></Route>

    <Route path = '/cart'  element = {<CartList></CartList>}></Route>

  </Routes>

<Footer></Footer>

    </>
  )
}

export default App
