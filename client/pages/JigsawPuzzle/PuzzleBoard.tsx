import { useDrop } from 'react-dnd'

interface Props {
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
  index: number
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
  checkWin: () => void
}

export default function PuzzleBoard({
  board,
  setBoard,
  index,
  setPieces,
  checkWin,
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
    console.log(number)

    setBoard((prevBoard) => {
      const tempArr = [...prevBoard]
      if (tempArr[index] !== 0) returnPiece = tempArr[index]
      tempArr[index] = number
      console.log(index)
      checkBoard(tempArr)
      return tempArr
    })
    setPieces((prevPieces) => {
      const tempArr = [...prevPieces]
      console.log('Pieces Before Update:', tempArr)
      // find index of the img being removed
      const i = tempArr.indexOf(number)
      // while the arrays are being updated as expected, the index cannot be found..
      // the correct image is rendering, but not being console.log...
      console.log('Index Found:', i)
      if (i !== -1) {
        if (returnPiece !== 0) {
          tempArr[i] = returnPiece
        } else {
          tempArr[i] = 90
        }
      } else {
        console.log('Number not found in Pieces:', number)
      }
      return tempArr
    })
  }

  // check if all pieces have been placed on board
  function checkBoard(tempArr: number[]) {
    const emptySpot = tempArr.indexOf(0)
    if (emptySpot === -1) {
      checkWin()
    }
  }

  function returnPiece(num: number): void {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      newBoard[index] = 0
      return newBoard
    })
    setPieces((prevPieces) => {
      const newPieces = [...prevPieces]
      const i = newPieces.indexOf(90)
      newPieces[i] = num
      return newPieces
    })
  }

  return (
    <p className={`box ${isOver ? 'drop-position' : ''}`} ref={drop}>
      {board[index] > 0 && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <img
          // onClick={() => returnPiece(board[index])}
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
