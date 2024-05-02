import { useDrop } from 'react-dnd'
interface Props {
  thing: number
  i: number
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
}
export default function Board({ thing, i, setBoard, setPieces }: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { piece: number }) => placePiece(item.piece),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  function placePiece(number: number) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      newBoard[i] = number
      return newBoard
    })
    setPieces((prevPieces) => {
      const newPieces = [...prevPieces]
      const index = newPieces.indexOf(number)
      if (index === -1) {
        console.log('piece not found for removal')
      } else {
        newPieces[index] = 0
      }
      return newPieces
    })
  }

  function handleClick(number: number) {
    setPieces((prevPieces) => {
      return [...prevPieces, number]
    })
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      const index = newBoard.indexOf(number)
      if (index === -1) {
        console.log('piece not found for removal')
      } else {
        newBoard[index] = 0
      }

      return newBoard
    })
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions
    <>
      {thing === 0 ? (
        <p className={`box ${isOver ? 'drop-position' : ''}`} ref={drop}></p>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <p
          className={`box ${isOver ? 'drop-position' : ''}`}
          ref={drop}
          onClick={() => handleClick(thing)}
        >
          {thing}
        </p>
      )}
    </>
  )
}
