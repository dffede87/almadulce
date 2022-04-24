import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const indexProd = cart.findIndex((cartItem) => cartItem.id === item.id)
    if (indexProd !== -1) {
      const newCart = [...cart]
      newCart[indexProd].numero = newCart[indexProd].numero + item.numero
      newCart[indexProd].subtotal = newCart[indexProd].subtotal + item.subtotal
      setCart(newCart)
    } else {
      setCart([...cart, item])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((producto) => producto.id !== id))
  }

  const clearAll = () => setCart([])

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearAll }}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartContextProvider