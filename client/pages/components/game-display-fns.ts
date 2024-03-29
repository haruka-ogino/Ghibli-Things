import { QueryClient } from '@tanstack/react-query'
import { CategoryWithFilm } from '../../../models/ghibli'

// -- display selection functions --

// selecting category with counter
function selectCategory(
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
) {
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
export function handleGetCategoryItem(
  dishesArr: CategoryWithFilm[],
  charsArr: CategoryWithFilm[],
  placesArr: CategoryWithFilm[],
  category: string,
  counter: number,
  setItems: React.Dispatch<React.SetStateAction<CategoryWithFilm[]>>,
  queryClient: QueryClient,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
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

  selectCategory(counter, setCounter, setCategory)
}
