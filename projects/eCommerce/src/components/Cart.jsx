import { useContext, useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './icons'
import './Cart.css'
import { CartContext } from '../context/cartProvider'

export const Cart = () => {
  const cartCheckboxId = useId()
  const { cart } = useContext(CartContext)

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.length !== 0 &&
            cart.map(product => {
              // console.log('Cada producto del carrito', product)
              return (
                <div key={product.id}>
                  <li>
                    <img src={product.thumbnail} alt={product.title} />
                  </li>
                  <div>
                    <strong>{product.name}</strong>
                  </div>
                  <footer>
                    <small>
                      Qty: 1
                    </small>
                    <button>+</button>
                  </footer>
                </div>
              )
            })}
          {/* <li>
            <img src='https://i.dummyjson.com/data/products/30/thumbnail.jpg' alt='Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality' />
          </li> */}
        </ul>

        <button className='clear-cart'>
          <ClearCartIcon />
        </button>
      </aside>

    </>
  )
}
