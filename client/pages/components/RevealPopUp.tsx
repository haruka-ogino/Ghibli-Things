import { useNavigate } from 'react-router'
import {
  CategoryWithDescription,
  CategoryWithFilm,
  Data,
} from '../../../models/ghibli'

interface Props {
  // show: boolean
  message: string
  counter: number
  data: Data
  handleGetCategory: (data: Data) => void
}

export default function RevealPopUp({
  // show,
  message,
  counter,
  data,
  handleGetCategory,
}: Props) {
  const navigate = useNavigate()

  function handleEndGame() {
    navigate('/game-results')
  }

  // if (!show) return null
  return (
    <div className="popup-overlay">
      <div className="answer-popup">
        <h2>{message}</h2>
        {counter < 10 ? (
          <button onClick={() => handleGetCategory(data)}>Next Question</button>
        ) : (
          <button onClick={handleEndGame}>See Results</button>
        )}
      </div>
    </div>
  )
}
