import React from 'react'
import { Link } from '../components/Link'

export const Page404 = () => {
  return (
    <>
      <div>This is NOT fine 404</div>
      <img src='https://media1.giphy.com/media/R2VzAiwZZLc4nYwqv1/giphy.gif?cid=ecf05e47kizbisucq7h6o8wt68jmofjej36uxxzw8kl0fakt&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
      <Link to='/'>Volver a la Home</Link>
    </>
  )
}
