import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import useCategoryItems from '../hooks/useCategoryItems'
import {
  CategoryWithDescription,
  CategoryWithFilm,
  Data,
  Reveal,
} from '../../models/ghibli'
import AnswersDisplay from '../components-quiz/AnswersDisplay'
import { randomInt } from '../components-quiz/randomFunctions'
import QuestionDisplay from '../components-quiz/QuestionDisplay'
import RevealPopUp from '../components-quiz/RevealPopUp'
import GameResults from '../components-quiz/GameResults'

export default function RandomItems() {
  const [counter, setCounter] = useState(0)
  const [items, setItems] = useState<CategoryWithDescription[]>([])
  // game states
  const [correctAns, setCorrectAns] = useState<CategoryWithFilm>()
  const [reveal, setReveal] = useState<Reveal>()
  const [score, setScore] = useState(0)

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
    // console.log(counter)
    setCounter((prevCounter) => prevCounter + 1)
  }

  // assigning correct category to be displayed
  function handleGetCategoryItem(data: Data) {
    if (reveal) setReveal({ ...reveal, showAns: false })
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
    setCorrectAns(arr[i])
  }

  // checking provided answer
  function checkAnswer(answer: string) {
    if (!correctAns) return undefined
    let message = ''
    if (answer === correctAns.film) {
      message = `Correct! ${correctAns.name} is seen on ${correctAns.film}`
      setScore((prevScore) => prevScore + 1)
      console.log(score)
    } else {
      message = `Sorry, ${answer} is wrong. ${correctAns.name} is seen on ${correctAns.film}`
    }
    setReveal({ showAns: true, message, img: correctAns.img, showScore: false })
  }

  function newGame() {
    setCounter(1)
    if (reveal) setReveal({ ...reveal, showAns: false, showScore: false })
    setScore(0)
    queryClient.invalidateQueries({ queryKey: ['categories'] })
  }

  if (data) {
    return (
      <>
        {items.length > 0 ? (
          <div className="game">
            {reveal?.showScore ? (
              <GameResults score={score} counter={counter} newGame={newGame} />
            ) : (
              <>
                {reveal?.showAns && (
                  <RevealPopUp
                    reveal={reveal}
                    counter={counter}
                    data={data}
                    handleGetCategory={handleGetCategoryItem}
                    setReveal={setReveal}
                  />
                )}
                <QuestionDisplay
                  counter={counter}
                  correct={correctAns}
                  items={items}
                />
                <AnswersDisplay items={items} checkAnswer={checkAnswer} />
              </>
            )}
          </div>
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
