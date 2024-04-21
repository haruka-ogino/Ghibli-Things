import { useState } from 'react'
import '../../styles/jigsaw.css'
import PuzzlePieces from './PuzzlePieces'
import { DragObjectFactory, DropTargetMonitor, useDrop } from 'react-dnd'
import PuzzleBoard from './PuzzleBoard'

export default function JigsawPuzzle() {
  const imageNumbers = Array.from({ length: 15 }, (_, index) => index + 1)
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
        <p>puzzle board is below</p>
        <div className="board">
          {board.map((number, i) => (
            <PuzzleBoard key={i} board={board} setBoard={setBoard} index={i} />
          ))}
        </div>
        <p>The pieces are below</p>
        <div className="jigsaw-pieces">
          {imageNumbers.map((number, i) => (
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
