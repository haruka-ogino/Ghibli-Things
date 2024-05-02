import { useDrop } from 'react-dnd'
interface Props {
  thing: string
  i: number
  setBoard: React.Dispatch<React.SetStateAction<string[]>>
}
export default function Board({ thing, i, setBoard }: Props) {
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
  }
  return (
    <div className={`box ${isOver ? 'drop-position' : ''}`} ref={drop}>
      <div>{thing}</div>
    </div>
  )
}
