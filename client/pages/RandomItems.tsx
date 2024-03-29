import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import useCategoryItems from '../hooks/useCategoryItems'
import { CategoryWithFilm } from '../../models/ghibli'
import GameDisplay from './components/GameDisplay'

export default function RandomItems() {
  const [category, setCategory] = useState('')
  const [counter, setCounter] = useState(1)
  const [items, setItems] = useState<CategoryWithFilm[]>([])

  const queryClient = useQueryClient()
  const { data, isError, isLoading, error } = useCategoryItems()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // -- display selection functions --
  // selecting category with counter
  function selectCategory() {
    if (counter % 3 === 0) {
      setCategory('places')
    } else if (counter % 3 === 2) {
      setCategory('characters')
    } else if (counter % 3 === 1) {
      setCategory('dishes')
    }
    setCounter((prevCounter) => prevCounter + 1)
  }
  // assigning correct category to be displayed
  function handleGetCategoryItem(
    dishesArr: CategoryWithFilm[],
    charsArr: CategoryWithFilm[],
    placesArr: CategoryWithFilm[],
  ) {
    switch (category) {
      case 'characters':
        setItems(charsArr)
        console.log('characters!!!')
        console.log(counter)
        break
      case 'dishes':
        setItems(dishesArr)
        console.log('actually dishes!')
        console.log(counter)
        break
      default:
        setItems(placesArr)
        console.log('places!!!')
        console.log(counter)
    }
    // invalidate query key if all current items in the items state variable have been used
    if (counter % 3 === 0) {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      console.log('query invalidated')
    }

    selectCategory()
  }

  function startGame(
    dishesArr: CategoryWithFilm[],
    charsArr: CategoryWithFilm[],
    placesArr: CategoryWithFilm[],
  ): void {
    handleGetCategoryItem(dishesArr, charsArr, placesArr)
  }

  // game logic functions
  // need to determine which img should display - this will become the correct answer
  // startGame will possibly need to trigger this display
  // OPTION 1:
  // --the issue with this option is that the later films in the DB would never be the correct answer...
  // first item in the array is always the img displayed.
  // However, the films are shuffled before they are displayed.
  // STEPS to make OPTION 1 work:
  // display img
  // have a films array with two films (for any category)
  // shuffle the array before displaying it - possibly right after receiving the data.
  // display shuffledArr.
  // OPTION 2:
  // randomly arrange array BEFORE displaying anything
  // films are always displayed in the order that they come in.
  // an entire object is set to be the answer.
  // this contains all the info - including film title and img string
  // img is randomly chosen to be displayed using state.
  // then, the string from the selected (by user) film is compared to this obj state.

  if (data) {
    const { dishes, chars, places } = data
    // console.log(data)
    return (
      <div className="game-display">
        {items.length > 0 ? (
          <GameDisplay
            data={data}
            handleGetCategoryItem={handleGetCategoryItem}
            items={items}
          />
        ) : (
          <>
            <h2>Let&apos;s play!</h2>
            <button
              className="game-btn"
              onClick={() => startGame(dishes, chars, places)}
            >
              Start Game
            </button>
          </>
        )}
      </div>
    )
  }
}
