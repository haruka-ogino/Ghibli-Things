import { useState } from 'react'
import '../../styles/jigsaw.css'
import { useDrag } from 'react-dnd'
import PuzzlePieces from './PuzzlePieces'

export default function JigsawPuzzle() {
  const imageNumbers = Array.from({ length: 15 }, (_, index) => index + 1)
  const initialState = Array.from({ length: 15 }, () => '')
  const [board, setBoard] = useState(initialState)

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
          {imageNumbers.map((number, i) => (
            <p key={i} className="box"></p>
          ))}
        </div>
        <p>The pieces are below</p>
        <div className="jigsaw-pieces">
          {imageNumbers.map((number, i) => (
            // eslint-disable-next-line react/jsx-key
            <PuzzlePieces url={handleUrl(number)} i={i} />
          ))}
        </div>
      </div>
    </>
  )
}
