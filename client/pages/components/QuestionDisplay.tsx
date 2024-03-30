import {
  CategoryWithDescription,
  CategoryWithFilm,
} from '../../../models/ghibli'

interface Props {
  counter: number
  correct: CategoryWithFilm | undefined
  items: CategoryWithDescription[]
}

export default function QuestionDisplay({ counter, correct, items }: Props) {
  if (correct) {
    return (
      <div className="question-display">
        <h2>
          {counter}. What film is the {items[0].category} below seen on?
        </h2>
        <img src={correct.img} alt="guess the film" />
      </div>
    )
  }
}
