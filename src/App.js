import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Alish from './pages/Alish'
import Nav from './Nav'

const App = () => {
  return (
    <>
    {/* <Link to={'/product'} className='p-4 bg-blue-500 mx-8' >Link to Product</Link>
    <Link to={'/alish'} className='p-4 bg-blue-500 mx-8' >Link to alish</Link> */}
    {/* <Nav /> */}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/product" element="<div>hello</div>" />
      <Route path='/alish' element={<Alish  />} >
      <Route path="product" element="<div>hello</div>" />

      </Route>  
      
      </Routes>

    </>
  )
}

export default App
