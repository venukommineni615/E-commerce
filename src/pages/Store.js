import React from 'react'
import Header from '../Components/Header';
import Albums from '../Components/Albums';
import Cart from '../Components/Cart'
import { useState } from 'react';
import CartProvider from '../store/CartProvider';

const Store = () => {
    const [toggleCart,setToggleCart]=useState(false)
  const show=()=>{
    setToggleCart((prev)=>{
      return !prev
    })
  }
  const close=()=>{
    setToggleCart((prev)=>{
      return !prev
    })
  }
  return (
    <CartProvider>
      <Header show={show}></Header>
      <Albums></Albums>
      <Cart show={toggleCart} handleClose={close}></Cart>
    </CartProvider>
  )
}

export default Store