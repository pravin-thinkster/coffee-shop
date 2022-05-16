import React from 'react';
import './index.scss'
import { ShoppingProvider } from './components/ShoppingContext/ShoopingContext'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Products from './components/Products/index'
import ShoppingCart from './components/ShoppingCart/index'

function App() {
  return (
    <>
      <ShoppingProvider>
        <Header />
        <ShoppingCart />
        <Products />
      </ShoppingProvider>
      <Footer />
    </>
  );
}

export default App;
