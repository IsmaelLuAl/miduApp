import { useId, useState } from 'react'
import { listOfProducts as initialProducts } from '../mocks/products.json'
import './Filters.css'

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const allCategories = initialProducts.map(product => product.category.charAt(0).toUpperCase() + product.category.slice(1))
  const categoriesTemp = allCategories.filter((category, i) => (allCategories.indexOf(category) === i))
  const categories = ['All', ...categoriesTemp]

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
    onChange(prevState => {
      return (
        { ...prevState, minPrice: e.target.value }
      )
    })
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => {
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
          <input type='range' id={minPriceFilterId} min='0' max='2000' onChange={handleChangeMinPrice} />
          <span>{minPrice} €</span>
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
