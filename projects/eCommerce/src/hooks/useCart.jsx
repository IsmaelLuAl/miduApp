import { useContext } from 'react'
import { CartContext } from '../context/cartProvider'

export function useCart () {
  const context = useContext(CartContext)

  // Si el contexto es undefined, significa que estas usando el customHoook en un sitio que no puedes
  // porque esa parte de la app no esta envuelta con un provider
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
