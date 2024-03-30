import { CategoryWithDescription, Data } from '../../../models/ghibli'

interface Props {
  data: Data
  items: CategoryWithDescription[]
  checkAnswer: (answer: string) => undefined
  handleGetCategoryItem: (data: Data) => void
}

export default function AnswersDisplay({
  data,
  items,
  checkAnswer,
  handleGetCategoryItem,
}: Props) {
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
      <button className="game-btn" onClick={() => handleGetCategoryItem(data)}>
        next
      </button>
    </div>
  )
}
