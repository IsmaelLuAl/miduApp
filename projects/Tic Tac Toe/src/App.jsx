import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkEndGame, checkWinnerFrom } from './logic/board';
import { WinnerModal } from './components/WinnerModal';
import { BoardGame } from './components/BoardGame';

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) //null se usará como que no hay ganador y false como un empate

  const updateBoard = (index) => {
    if(board[index] || winner) return
    // Crea un nuevo tablero, el nuevo tablero en la posicion donde se ha realizado el clikc(index) se guarda el turno (X o O) y se
    // actualiza el tablero de nuesta App con el nuevo tablero y el turno
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //false == empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset</button>
        <BoardGame boardGame={board} updateBoard={updateBoard}/>
        <section className='turn'>
          <Square isSelected = {turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected = {turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame} ></WinnerModal>
      </main>
      
    </>
  )
}
export default App

