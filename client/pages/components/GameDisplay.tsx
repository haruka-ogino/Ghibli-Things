import {
  CategoryWithDescription,
  CategoryWithFilm,
  Data,
} from '../../../models/ghibli'

interface Props {
  counter: number
  data: Data
  correct: CategoryWithFilm | undefined
  items: CategoryWithDescription[]
  checkAnswer: (answer: string) => undefined
  handleGetCategoryItem: (data: Data) => void
}

export default function GameDisplay({
  counter,
  data,
  correct,
  items,
  checkAnswer,
  handleGetCategoryItem,
}: Props) {
  if (correct) {
    // console.log(items)
    return (
      <div className="game-display">
        <h2>
          {counter}. What film is the {items[0].category} seen on?
        </h2>
        <img src={correct.img} alt="guess the film" />
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
        <button
          className="game-btn"
          onClick={() => handleGetCategoryItem(data)}
        >
          next
        </button>
      </div>
    )
  }
}
