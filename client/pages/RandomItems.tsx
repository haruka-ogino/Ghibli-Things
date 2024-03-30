import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import useCategoryItems from '../hooks/useCategoryItems'
import {
  CategoryWithDescription,
  CategoryWithFilm,
  Data,
} from '../../models/ghibli'
import GameDisplay from './components/GameDisplay'
import { randomInt } from './components/randomFunctions'
export default function RandomItems() {
  const [counter, setCounter] = useState(0)
  const [items, setItems] = useState<CategoryWithDescription[]>([])
  // game states
  const [correctAns, setCorrectAns] = useState<CategoryWithFilm>()
  const [selectedAns, setSelectedAns] = useState<CategoryWithDescription>()

  const queryClient = useQueryClient()
  const { data, isError, isLoading, error } = useCategoryItems()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // -- display selection functions --
  // selecting category with counter
  function selectCategory(data: Data) {
    let chosenItems: CategoryWithFilm[] = []
    let category = ''
    if (counter % 3 === 0) {
      chosenItems = data.places
      category = 'place'
    } else if (counter % 3 === 2) {
      chosenItems = data.chars
      category = 'character'
    } else if (counter % 3 === 1) {
      chosenItems = data.dishes
      category = 'dish'
    }
    setItems([
      { ...chosenItems[0], category },
      { ...chosenItems[1], category },
    ])
    selectAns(chosenItems)
    console.log(counter)
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
    // console.log(i)
    setCorrectAns(arr[i])
  }

  if (data) {
    return (
      <>
        {items.length > 0 ? (
          <GameDisplay
            counter={counter}
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
      </>
    )
  }
}
