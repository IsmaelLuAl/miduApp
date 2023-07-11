/* eslint-disable react/prop-types */
import { Square } from "./Square"

export const BoardGame = ({boardGame, updateBoard}) => {

  console.log(boardGame);
  return (
    <>
      <section className='game'>
        {
          boardGame.map((square, index) => {
            return(
              <Square key={index} updateBoard={updateBoard} index={index}>{square}</Square>
            )
          })
        }
      </section>
    </>
  )
}
