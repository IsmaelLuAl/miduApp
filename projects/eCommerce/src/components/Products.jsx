import './Products.css'
import { AddToCartIcon } from './icons'
import { useCallback, useContext } from 'react'
import { CartContext } from '../context/cartProvider'

export const Products = ({ products }) => {
  const { addToCart } = useContext(CartContext)

  const handleClick = useCallback((product) => {
    console.log('Añadir al carrito', product)
    addToCart(product)
  }, [])

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
                {/* <button style={{ color: '#fff' }}><AddToCartIcon /></button> */}
                <button style={{ color: '#fff' }} onClick={() => handleClick(product)}><AddToCartIcon /></button>
              </div>
            </li>
          ))
        }
      </ul>

    </main>
  )
}
