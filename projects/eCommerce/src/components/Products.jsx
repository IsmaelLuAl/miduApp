import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
import { useContext } from 'react'
import { CartContext } from '../context/cartProvider'

export const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => {
            const isProductInCart = checkProductInCart(product)

            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong>
                  <strong> - {product.price}€</strong>
                </div>
                <div>
                  {/* <button style={{ color: '#fff' }}><AddToCartIcon /></button> */}
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : '#09F' }} onClick={() =>
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>

    </main>
  )
}
