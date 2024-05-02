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
      return [...prevBoard, string]
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
  return (
    <div className={`box ${isOver ? 'drop-position' : ''}`} ref={drop}>
      <div>{thing}</div>
    </div>
  )
}
