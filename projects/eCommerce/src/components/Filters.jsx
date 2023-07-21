import { useContext, useId } from 'react'
import { listOfProducts as initialProducts } from '../mocks/products.json'
import './Filters.css'
import { FiltersContext } from '../context/filtersProvider'

export const Filters = () => {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { filters, setFilters } = useContext(FiltersContext)

  const allCategories = initialProducts.map(product => product.category.charAt(0).toUpperCase() + product.category.slice(1))
  const categoriesTemp = allCategories.filter((category, i) => (allCategories.indexOf(category) === i))
  const categories = ['All', ...categoriesTemp]

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => {
      const newMinPrice = e.target.value
      return (
        { ...prevState, minPrice: newMinPrice }
      )
    })
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => {
      const newCategory = event.target.value.charAt(0).toLowerCase() + event.target.value.slice(1)
      return (
        { ...prevState, category: newCategory }
      )
    })
  }

  return (
    <>
      <section className='filters'>

        <div>
          <label htmlFor={minPriceFilterId}>Price from:</label>
          <input type='range' id={minPriceFilterId} min='0' max='2000' onChange={handleChangeMinPrice} value={filters.minPrice} />
          <span>{filters.minPrice} €</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId}>Category </label>
          <select id={categoryFilterId} onChange={handleChangeCategory}>
            {
              categories.map((category, i) => {
                return (
                  <option value={category} key={i}>{category}</option>
                )
              })
            }
          </select>
        </div>
      </section>
    </>
  )
}
