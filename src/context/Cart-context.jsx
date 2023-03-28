import React from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";


export const CartContext = createContext([])

export const CartPorvider = ({children}) => {

  const storage = JSON.parse(localStorage.getItem('cart')) ?? []

  const [cartItems, setCartItems] = useState(storage)

  const handleCart = (item) => {
    setCartItems((old) => ([...old, item]))
  }
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  },[cartItems])
  
  return(
    <CartContext.Provider value ={{cartItems, handleCart}}>
      {children}
    </CartContext.Provider>
  )
}