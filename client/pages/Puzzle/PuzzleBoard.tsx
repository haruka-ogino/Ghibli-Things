import { DragObjectFactory, DropTargetMonitor, useDrop } from 'react-dnd'

interface Props {
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
  index: number
}

export default function PuzzleBoard({ board, setBoard, index }: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { number: number }, monitor) =>
      placePiece(item.number, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  function placePiece(number: number, monitor: DropTargetMonitor) {
    if (number < 10) {
      console.log(`/images/soot-parts-easy/image_part_00${number}.png`)
    } else {
      console.log(`/images/soot-parts-easy/image_part_0${number}.png`)
    }
    const dropIndex: number = monitor.getItem().index // Get the index of the drop target
    const updatedBoard = [...board]
    updatedBoard[dropIndex] = number // Update the board array at the drop index
    setBoard(updatedBoard)
  }

  return (
    <p className="box">
      {board[index] > 0 && (
        <img
          alt="puzzle piece"
          src={
            board[index] < 9
              ? `/images/soot-parts-easy/image_part_00${board[index]}.png`
              : `/images/soot-parts-easy/image_part_0${board[index]}.png`
          }
        />
      )}
    </p>
  )
}
