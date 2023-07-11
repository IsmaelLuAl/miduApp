import { WINNER_COMBINATIONS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
  for(const combo of WINNER_COMBINATIONS){
    const [a,b,c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[b ] === boardToCheck[a] &&
      boardToCheck[c] === boardToCheck[a]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}