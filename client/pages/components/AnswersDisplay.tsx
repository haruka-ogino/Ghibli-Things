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
          Film 1: {items[0].film}
          <br />
          Item 1: {items[0].name}
        </button>

        <button onClick={() => checkAnswer(items[1].film)}>
          Film 2: {items[1].film}
          <br />
          Item 2: {items[1].name}
        </button>
      </div>
    </div>
  )
}
