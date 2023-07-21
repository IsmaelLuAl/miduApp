import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = () => {
    const productInCartIndex = cart.findIndex(item => item.id === productInCartIndex.id)
    console.log('El index del producto en el carrito', productInCartIndex)

    if (productInCartIndex === -1) {
      return
    }
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    setCart(prevState => [...prevState, { ...productInCartIndex, quantity: 1 }])
  }

  const removeFromCart = (itemId) => {

  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
