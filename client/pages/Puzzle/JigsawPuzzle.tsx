import { useState } from 'react'
import '../../styles/jigsaw.css'

export default function JigsawPuzzle() {
  const imageNumbers = Array.from({ length: 15 }, (_, index) => index + 1)
  const [board, setBoard] = useState([])

  return (
    <>
      <div className="puzzle-type">
        <h2>Jigsaw puzzles live here</h2>
        <p>puzzle board is below</p>
        <div className="board">
          {imageNumbers.map((number, i) => (
            // <div key={i} className="box">
            //   {/* p */}
            // </div>
            <p key={i} className="box">
              p
            </p>
          ))}
        </div>
        <p>The pieces are below</p>
        <div className="jigsaw-pieces">
          {imageNumbers.map((number, i) => (
            <img
              className="piece"
              src={
                number < 10
                  ? `/images/soot-parts-easy/image_part_00${number}.png`
                  : `/images/soot-parts-easy/image_part_0${number}.png`
              }
              alt="puzzle piece"
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  )
}
