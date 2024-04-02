interface Props {
  score: number
  counter: number
  newGame: () => void
}

export default function GameResults({ score, counter, newGame }: Props) {
  return (
    <>
      <h2>
        Your score: {score} out of {counter}
      </h2>
      <button type="button" onClick={newGame}>
        Play Again!
      </button>
    </>
  )
}
