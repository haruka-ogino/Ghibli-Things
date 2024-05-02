import { useDrop } from 'react-dnd'
interface Props {
  thing: string
  i: number
  setBoard: React.Dispatch<React.SetStateAction<string[]>>
  setPieces: React.Dispatch<React.SetStateAction<string[]>>
}
export default function Board({ thing, i, setBoard, setPieces }: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { piece: string }) => placePiece(item.piece),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  function placePiece(string: string) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      newBoard[i] = string
      return newBoard
    })
    setPieces((prevPieces) => {
      const newPieces = [...prevPieces]
      const index = newPieces.indexOf(string)
      if (index === -1) {
        console.log('piece not found for removal')
      } else {
        newPieces[index] = ''
      }
      return newPieces
    })
  }

  function handleClick(string: string) {
    setPieces((prevPieces) => {
      return [...prevPieces, string]
    })
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      const index = newBoard.indexOf(string)
      if (index === -1) {
        console.log('piece not found for removal')
      } else {
        newBoard[index] = ''
      }
      return newBoard
    })
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions
    <p
      className={`box ${isOver ? 'drop-position' : ''}`}
      ref={drop}
      onClick={() => handleClick(thing)}
    >
      {thing}
    </p>
  )
}
