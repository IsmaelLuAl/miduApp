import { Square } from "./Square"

// eslint-disable-next-line react/prop-types
export const WinnerModal = ({winner, resetGame}) => {
  if (winner === null) return null

  const winnertext = winner === false ? 'Empate' : 'Ganó'
  return (
    <>
      <section className='winner'>
        <div className='text'>
          <h2>{winnertext}</h2>
          <header className='win'>
            { winner && <Square>{winner}</Square>}
          </header>
          <footer>
            <button onClick={resetGame}>Restart</button>
          </footer>
        </div>
      </section>
    </>
  )
}
