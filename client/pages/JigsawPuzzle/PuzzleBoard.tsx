import { useDrop } from 'react-dnd'

interface Props {
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
  index: number
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
  checkWin: (arr: number[]) => void
  clickedPiece: number
  setClickedPiece: React.Dispatch<React.SetStateAction<number>>
  thing: number
}

export default function PuzzleBoard({
  thing,
  board,
  setBoard,
  index,
  setPieces,
  checkWin,
  clickedPiece,
  setClickedPiece,
}: Props) {
  // check if all pieces have been placed on board
  // function checkBoard(tempArr: number[]) {
  //   const emptySpot = tempArr.indexOf(0)
  //   if (emptySpot === -1) {
  //     checkWin(tempArr)
  //   }
  // }

  // function returnPiece(image: number) {
  //   const returnPiece = board[index]
  //   setBoard((prevBoard) => {
  //     const newBoard = [...prevBoard]
  //     newBoard[index] = 0
  //     return newBoard
  //   })
  //   if (image === 0) {
  //     setPieces((prevPieces) => {
  //       const newPieces = [...prevPieces]
  //       const emptyIndex = newPieces.indexOf(90)
  //       newPieces[emptyIndex] = returnPiece
  //       return newPieces
  //     })
  //   } else {
  //     setPieces((prevPieces) => {
  //       const newPieces = [...prevPieces]
  //       const emptyIndex = newPieces.indexOf(90)
  //       newPieces[emptyIndex] = image
  //       return newPieces
  //     })
  //   }
  // }

  // function placePiece() {
  //   setBoard((prevBoard) => {
  //     const newBoard = [...prevBoard]
  //     newBoard[index] = clickedPiece
  //     setClickedPiece(0)
  //     checkBoard(newBoard)
  //     return newBoard
  //   })
  //   setPieces((prevPieces) => {
  //     const newPieces = [...prevPieces]
  //     const i = newPieces.indexOf(clickedPiece)
  //     newPieces[i] = 90
  //     return newPieces
  //   })
  // }

  // function handleClick() {
  //   if (clickedPiece >= 1 && clickedPiece <= 15) {
  //     if (board[index] !== 0) {
  //       const returningPiece = board[index]
  //       returnPiece(returningPiece)
  //       placePiece()
  //     } else {
  //       placePiece()
  //     }
  //   } else if (clickedPiece === 0 || clickedPiece === 90) {
  //     returnPiece(0)
  //   }
  // }

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
      newBoard[index] = number
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
      const i = newBoard.indexOf(number)
      if (i === -1) {
        console.log('piece not found for removal')
      } else {
        newBoard[i] = 0
      }

      return newBoard
    })
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    // <p className="box" onClick={handleClick}>
    <>
      {thing === 0 ? (
        <p className={`box ${isOver ? 'drop-position' : ''}`} ref={drop}></p>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <img
          className={`box ${isOver ? 'drop-position' : ''}`}
          alt="puzzle piece"
          ref={drop}
          onClick={() => handleClick(thing)}
          src={
            thing < 10
              ? `/images/soot-parts-easy/image_part_00${thing}.png`
              : `/images/soot-parts-easy/image_part_0${thing}.png`
          }
        />
      )}
    </>
  )
}
