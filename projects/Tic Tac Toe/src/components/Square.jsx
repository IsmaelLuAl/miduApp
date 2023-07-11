// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index}) => {

  const classNameTurn = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div className={classNameTurn} onClick={handleClick}>
      {children}
    </div>
  )
}