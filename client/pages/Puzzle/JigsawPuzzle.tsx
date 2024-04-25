import { useState } from 'react'
import '../../styles/jigsaw.css'
import PuzzlePieces from './PuzzlePieces'
import PuzzleBoard from './PuzzleBoard'

export default function JigsawPuzzle() {
  const initialPieces = Array.from({ length: 15 }, (_, index) => index + 1)
  const [pieces, setPieces] = useState(initialPieces)
  const initialState = Array.from({ length: 15 }, () => 0)
  const [board, setBoard] = useState(initialState)
  const [win, setWin] = useState(false)
  const [showMsg, setShowMsg] = useState(false)
  const message = [
    'Congratulations, you have solved the puzzle',
    'That is not quite right. Click re-start puzzle or click the each piece to remove it.',
  ]

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

  // make fn to check for win after pieces section is empty
  function checkPieces() {
    renderWinState()
    let tempWin = true
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== i + 1) {
        tempWin = false
        break
      }
    }
    setWin(tempWin)
  }

  function renderWinState() {
    setShowMsg(true)
  }

  console.log(board)
  // make popup clue that shows the puzzle halfway done or so.
  // make instructions popup

  return (
    <>
      <div className="puzzle-type">
        <h2>Jigsaw puzzles live here</h2>
        {!showMsg ? (
          <p>Complete the Soot Sprites puzzle to reveal the image!</p>
        ) : win ? (
          <p>{message[0]}</p>
        ) : (
          <p>{message[1]}</p>
        )}
        <div className="board">
          {board.map((number, i) => (
            <PuzzleBoard
              key={`${i}-board`}
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
              key={`${i}-piece`}
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
