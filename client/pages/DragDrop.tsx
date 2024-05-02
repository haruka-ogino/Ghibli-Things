import { useState } from 'react'
import Pieces from './DragNDrop/Pieces'

export default function DragDrop() {
  const initialState = ['helloooooooooooooooooo', 'holaaaaaaaaaaaaaaaaa']
  const [pieces, setPieces] = useState(initialState)

  return (
    <>
      <div>
        <h1>hey hey dragging and dropping here</h1>
        {pieces.map((piece, i) => (
          <Pieces key={i} i={i} piece={piece} />
        ))}
      </div>
    </>
  )
}
