import { useQueryClient } from '@tanstack/react-query'
import { SetStateAction, useState } from 'react'
import useCategoryItems from '../hooks/useCategoryItems'
import { CategoryWithFilm, Data } from '../../models/ghibli'
import GameDisplay from './components/GameDisplay'
import { randomInt } from './components/randomFunctions'
export default function RandomItems() {
  const [counter, setCounter] = useState(1)
  const [items, setItems] = useState<CategoryWithFilm[]>([])
  // game states
  const [correctAns, setCorrectAns] = useState<CategoryWithFilm>()
  const [selectedAns, setSelectedAns] = useState<CategoryWithFilm>()

  const queryClient = useQueryClient()
  const { data, isError, isLoading, error } = useCategoryItems()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // -- display selection functions --
  // selecting category with counter
  function selectCategory(data: Data) {
    let chosenItems: CategoryWithFilm[] = []
    if (counter % 3 === 0) {
      chosenItems = data.places
    } else if (counter % 3 === 2) {
      chosenItems = data.chars
    } else if (counter % 3 === 1) {
      chosenItems = data.dishes
    }
    // console.log('normal variable below')

    // console.log(chosenItems)
    setItems(chosenItems)
    selectAns(chosenItems)
    setCounter((prevCounter) => prevCounter + 1)
  }

  // assigning correct category to be displayed
  function handleGetCategoryItem(data: Data) {
    selectCategory(data)

    // invalidate query key if all current items in the items state variable have been used
    if (counter % 3 === 0) {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      console.log('query invalidated')
    }
  }

  // selecting correct ans
  function selectAns(arr: CategoryWithFilm[]): void {
    const i = randomInt(0, 1)
    console.log(i)

    // console.log(arr)

    setCorrectAns(arr[i])
    // console.log(correctAns)
  }

  if (data) {
    // console.log('useItems below')
    // console.log(items)
    return (
      <div className="game-display">
        {items.length > 0 ? (
          <GameDisplay
            data={data}
            correct={correctAns}
            handleGetCategoryItem={handleGetCategoryItem}
            items={items}
          />
        ) : (
          <>
            <h2>Let&apos;s play!</h2>
            <button
              className="game-btn"
              onClick={() => handleGetCategoryItem(data)}
            >
              Start Game
            </button>
          </>
        )}
      </div>
    )
  }
}
