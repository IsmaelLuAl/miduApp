import './components/Products.css'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { listOfProducts as initialProducts } from './mocks/products.json'
import { Footer } from './components/Footer'

function App () {
  const [products] = useState(initialProducts)
  const { filteredProducts, setFilters } = useFilters({ products })

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
