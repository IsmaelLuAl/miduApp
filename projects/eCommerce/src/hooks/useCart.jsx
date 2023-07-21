import { useCallback, useContext } from 'react'
import { CartContext } from '../context/cartProvider'

export function useCart (product) {
  const { cart, setCart } = useContext(CartContext)

  // const addToCart = useCallback((product) => {
  //   const productInCartIndex = cart.findIndex(product => product.id === productInCartIndex.id)
  //   console.log('El index del producto en el carrito', productInCartIndex)

  //   if (productInCartIndex === -1) {
  //     return
  //   }
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }
  //   setCart(prevState => [...prevState, { ...productInCartIndex, quantity: 1 }])
  // }, [cart, setCart])

  const addToCart = useCallback(
    () => {
      console.log('Añadir al carrito', product)
    },
    [product]
  )

  // const addToCart = () => {
  //   console.log('Añadir al carrito')
  // }

  // const getMovies = useCallback(async ({ search }) => {
  //   if (search === previousSearch.current) return
  //   try {
  //     setLoading(true)
  //     setError(null)

  //     previousSearch.current = search
  //     const newMovies = await searchMovies({ search })
  //     setMovies(newMovies)
  //   } catch (error) {
  //     setError(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [])

  // const handleClickAddToCart = useCallback((product) => {
  //   addToCart(product)
  // }, []
  // )

  return { addToCart }
}
