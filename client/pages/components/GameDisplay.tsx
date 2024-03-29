import { CategoryWithFilm, Data } from '../../../models/ghibli'

interface Props {
  data: Data
  handleGetCategoryItem: (
    dishesArr: CategoryWithFilm[],
    charsArr: CategoryWithFilm[],
    placesArr: CategoryWithFilm[],
  ) => void
  items: CategoryWithFilm[]
  // startGame: (
  //   dishesArr: CategoryWithFilm[],
  //   charsArr: CategoryWithFilm[],
  //   placesArr: CategoryWithFilm[],
  // ) => void
}

export default function GameDisplay({
  data,
  handleGetCategoryItem,
  items,
  // startGame,
}: Props) {
  const { dishes, chars, places } = data
  return (
    <div>
      <img src={items[0].img} alt="guess-the-film" />
      <p>Film 1: {items[0].film}</p>
      <p>Item 1: {items[0].name}</p>
      {items.length > 1 && (
        <>
          <p>Film 2: {items[1].film}</p>
          <p>Item 2: {items[1].name}</p>
        </>
      )}
      <button
        className="game-btn"
        onClick={() => handleGetCategoryItem(dishes, chars, places)}
      >
        get random item
      </button>
    </div>
  )
}
