import { CategoryWithDescription } from '../../../models/ghibli'

interface Props {
  items: CategoryWithDescription[]
  checkAnswer: (answer: string) => undefined
}

export default function AnswersDisplay({ items, checkAnswer }: Props) {
  return (
    <div className="answers-display">
      {/* <div className="answer"> */}
      <button onClick={() => checkAnswer(items[0].film)} className="answer">
        {items[0].film}
      </button>
      {/* </div>
      <div className="answer"> */}
      <button onClick={() => checkAnswer(items[1].film)} className="answer">
        {items[1].film}
      </button>
      {/* </div> */}
    </div>
  )
}
