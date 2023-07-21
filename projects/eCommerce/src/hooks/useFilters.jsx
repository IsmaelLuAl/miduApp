import { useContext } from 'react'
import { FiltersContext } from '../context/filtersProvider'

export function useFilters ({ products }) {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const { filters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return { filteredProducts }
}
