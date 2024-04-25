import { useState } from 'react'
import '../../styles/jigsaw.css'
import PuzzlePieces from './PuzzlePieces'
import PuzzleBoard from './PuzzleBoard'
import JigsawClue from './JigsawClue'
import JigsawInstructions from './JigsawInstructions'

export default function JigsawPuzzle() {
  const initialPieces = Array.from({ length: 15 }, (_, index) => index + 1)
  const [pieces, setPieces] = useState(initialPieces)
  const initialState = Array.from({ length: 15 }, () => 0)
  const [board, setBoard] = useState(initialState)
  const [win, setWin] = useState(false)
  const [showMsg, setShowMsg] = useState(false)
  const message = [
    'Congratulations, you have solved the puzzle',
    'That is not quite right. Click re-start puzzle or click each piece to remove it from the board.',
  ]
  // popup states
  const [showClue, setShowClue] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

  console.log(showClue)

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

  function restartGame() {
    setPieces(initialPieces)
    setBoard(initialState)
  }

  // make fn to check for win after pieces section is empty
  function checkWin() {
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

  // make popup clue that shows the puzzle halfway done or so.
  // make instructions popup

  return (
    <>
      {showClue && <JigsawClue setShow={setShowClue} />}
      {showInstructions && <JigsawInstructions setShow={setShowInstructions} />}
      <div className="puzzle-type">
        <h2>Jigsaw puzzles live here</h2>
        {!showMsg ? (
          <p>Complete the Soot Sprites puzzle to reveal the image!</p>
        ) : win ? (
          <p>{message[0]}</p>
        ) : (
          <p>{message[1]}</p>
        )}
        <section className="board-section">
          <div className="board">
            {board.map((number, i) => (
              <PuzzleBoard
                key={`${i}-board`}
                board={board}
                setBoard={setBoard}
                setPieces={setPieces}
                index={i}
                checkWin={checkWin}
              />
            ))}
          </div>
          <div className="button-menu">
            <button onClick={restartGame}>Re-start puzzle</button>
            <button onClick={() => setShowClue(true)}>See clue</button>
            <button onClick={() => setShowInstructions(true)}>
              Instructions
            </button>
          </div>
        </section>
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
