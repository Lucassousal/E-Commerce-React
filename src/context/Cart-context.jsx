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


  const handleSun = (products) => {
    const sun = products.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    return sun
  }


  const handleProductDeletion = (idDelete) => {
    const newProducts = cartItems.filter((item) => item.id !== idDelete)
    setCartItems(newProducts)
  }


  const handleCleanCart = () => {
    const cleanCart = []
    setCartItems(cleanCart)
  }


  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  },[cartItems])
  
  return(
    <CartContext.Provider value ={{cartItems, handleCart, handleSun, handleProductDeletion, handleCleanCart}}>
      {children}
    </CartContext.Provider>
  )
}