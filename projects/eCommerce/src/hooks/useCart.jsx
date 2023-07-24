import { useCallback, useContext } from 'react'
import { CartContext } from '../context/cartProvider'

export function useCart (product) {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext)

  // Si el contexto es undefined, significa que estas usando el customHoook en un sitio que no puedes
  // porque esa parte de la app no esta envuelta con un provider
  // if (cart === undefined || setCart === undefined) {
  //   throw new Error('useCart must be used within a CartProvider')
  // }

  const handleClickAddToCart = useCallback((product) => {
    addToCart(product)
  }, [product])

  const handleClickRemoveFromCart = useCallback((product) => {
    removeFromCart(product)
  }, [product])

  const handleClickClearCart = () => {
    clearCart()
  }

  return { cart, handleClickAddToCart, handleClickRemoveFromCart, handleClickClearCart }
}
