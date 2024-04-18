import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products'
import RootLayout from './pages/RootLayout'
import ProductDetailPage from './pages/products/ProductDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/:id' element={<ProductDetailPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App