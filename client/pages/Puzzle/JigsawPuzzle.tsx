import { useState } from 'react'
import '../../styles/jigsaw.css'
import PuzzlePieces from './PuzzlePieces'
import PuzzleBoard from './PuzzleBoard'

export default function JigsawPuzzle() {
  const initialPieces = Array.from({ length: 15 }, (_, index) => index + 1)
  const [pieces, setPieces] = useState(initialPieces)
  const initialState = Array.from({ length: 15 }, () => 0)
  const [board, setBoard] = useState(initialState)
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: 'image',
  //   drop: (item: { number: number }, monitor) =>
  //     placePiece(item.number, monitor),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }))

  // function placePiece(number: number, monitor: DropTargetMonitor) {
  //   if (number < 10) {
  //     console.log(`/images/soot-parts-easy/image_part_00${number}.png`)
  //   } else {
  //     console.log(`/images/soot-parts-easy/image_part_0${number}.png`)
  //   }
  //   const dropIndex: number = monitor.getItem().index // Get the index of the drop target
  //   const updatedBoard = [...board]
  //   updatedBoard[dropIndex] = number // Update the board array at the drop index
  //   setBoard(updatedBoard)
  // }

  for (let i = initialPieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[initialPieces[i], initialPieces[j]] = [initialPieces[j], initialPieces[i]]
  }

  function handleUrl(number: number): string {
    if (number < 10) {
      return `/images/soot-parts-easy/image_part_00${number}.png` as string
    } else {
      return `/images/soot-parts-easy/image_part_0${number}.png` as string
    }
  }

  return (
    <>
      <div className="puzzle-type">
        <h2>Jigsaw puzzles live here</h2>
        <p>Complete the Soot Sprites puzzle to reveal the image!</p>
        <div className="board">
          {board.map((number, i) => (
            <PuzzleBoard
              key={i}
              board={board}
              setBoard={setBoard}
              setPieces={setPieces}
              index={i}
            />
          ))}
        </div>
        <p>Drag the pieces below to the board</p>
        <div className="jigsaw-pieces">
          {pieces.map((number, i) => (
            // eslint-disable-next-line react/jsx-key
            <PuzzlePieces
              key={number}
              url={handleUrl(number)}
              number={number}
              index={i}
            />
          ))}
        </div>
      </div>
    </>
  )
}
