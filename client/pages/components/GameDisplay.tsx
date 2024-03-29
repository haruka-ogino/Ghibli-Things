import { CategoryWithFilm, Data } from '../../../models/ghibli'

interface Props {
  data: Data
  handleGetCategoryItem: (data: Data) => void
  items: CategoryWithFilm[]
}

export default function GameDisplay({
  data,
  handleGetCategoryItem,
  items,
}: Props) {
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
      <button className="game-btn" onClick={() => handleGetCategoryItem(data)}>
        get random item
      </button>
    </div>
  )
}
