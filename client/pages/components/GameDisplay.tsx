import {
  CategoryWithDescription,
  CategoryWithFilm,
  Data,
} from '../../../models/ghibli'

interface Props {
  counter: number
  data: Data
  correct: CategoryWithFilm | undefined
  handleGetCategoryItem: (data: Data) => void
  items: CategoryWithDescription[]
}

export default function GameDisplay({
  counter,
  data,
  correct,
  handleGetCategoryItem,
  items,
}: Props) {
  if (correct) {
    // console.log(items)
    return (
      <div className="game-display">
        <h2>
          {counter}. What film is the {items[0].category} below from?
        </h2>
        <img src={correct.img} alt="guess the film" />
        <p>CORRECT: {correct.film}</p>
        <div className="answers">
          <p>
            Film 1: {items[0].film}
            <br />
            Item 1: {items[0].name}
          </p>

          <p>
            Film 2: {items[1].film}
            <br />
            Item 2: {items[1].name}
          </p>
        </div>
        <button
          className="game-btn"
          onClick={() => handleGetCategoryItem(data)}
        >
          get random item
        </button>
      </div>
    )
  }
}
