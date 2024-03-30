import { CategoryWithDescription } from '../../../models/ghibli'

interface Props {
  items: CategoryWithDescription[]
  checkAnswer: (answer: string) => undefined
}

export default function AnswersDisplay({ items, checkAnswer }: Props) {
  return (
    <div className="game-display">
      <div className="answers">
        <button onClick={() => checkAnswer(items[0].film)}>
          {items[0].film}
          {/* <br />
          {items[0].name} */}
        </button>

        <button onClick={() => checkAnswer(items[1].film)}>
          {items[1].film}
          {/* <br />
          {items[1].name} */}
        </button>
      </div>
    </div>
  )
}
