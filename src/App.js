import React from 'react'
import Header from './components/Header'
import ProductListing from './components/ProductListing'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductDetails from './components/ProductDetails'
const App = () => {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/products/:productId' exact element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
