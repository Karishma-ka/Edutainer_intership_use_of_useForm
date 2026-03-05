import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Product from './Product';
function Shopping() {
  return (
    <>
      <div className='container'>
        
        <header><nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <Link to='/about' class="navbar-brand" style={{color:'white'}}>About</Link>
           <Link to='/product' class="navbar-brand" style={{color:'white'}}>Product</Link>
            <Link to='/contact' class="navbar-brand" style={{color:'white'}}>Contact</Link>
        
        </nav></header>

      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default Shopping