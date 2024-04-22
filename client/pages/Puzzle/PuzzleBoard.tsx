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
    let returnPiece = 0
    setBoard((prevBoard) => {
      const tempArr = [...prevBoard]
      if (tempArr[index] !== 0) returnPiece = tempArr[index]
      tempArr[index] = number
      return tempArr
    })
    setPieces((prevPieces) => {
      const tempArr = [...prevPieces]
      // find index of the img being removed
      const i = tempArr.indexOf(number)
      if (returnPiece !== 0) {
        tempArr[i] = returnPiece
      } else {
        tempArr[i] = 90
      }
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
