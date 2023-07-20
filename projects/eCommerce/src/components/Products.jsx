import './Products.css'
import { AddToCartIcon } from './icons'

export const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
                <strong> - {product.price}€</strong>
              </div>
              <div>
                <button style={{ color: '#fff' }}><AddToCartIcon /></button>
              </div>
            </li>
          ))
        }
      </ul>

    </main>
  )
}
