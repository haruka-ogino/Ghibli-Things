import { useDrop } from 'react-dnd'

interface Props {
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
  index: number
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
}

export default function PuzzleBoard({
  board,
  setBoard,
  index,
  setPieces,
}: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { number: number }) => placePiece(item.number),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  function placePiece(number: number) {
    setBoard((prevBoard) => {
      const tempArr = [...prevBoard]
      tempArr[index] = number
      return tempArr
    })
    setPieces((prevPieces) => {
      const tempArr = [...prevPieces]
      tempArr[index] = number
      return tempArr
    })
  }

  return (
    <p className={`box ${isOver ? 'drop-position' : ''}`} ref={drop}>
      {board[index] > 0 && (
        <img
          alt="puzzle piece"
          src={
            board[index] < 10
              ? `/images/soot-parts-easy/image_part_00${board[index]}.png`
              : `/images/soot-parts-easy/image_part_0${board[index]}.png`
          }
        />
      )}
    </p>
  )
}
