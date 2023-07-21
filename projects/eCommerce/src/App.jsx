import './components/Products.css'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { listOfProducts as initialProducts } from './mocks/products.json'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cartProvider'

function App () {
  const [products] = useState(initialProducts)
  // console.log('Item de un producto', products[0])
  const { filteredProducts } = useFilters({ products })

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
