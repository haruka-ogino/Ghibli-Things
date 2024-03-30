import { useNavigate } from 'react-router'
import { Data } from '../../../models/ghibli'
import '../../styles/popup.css'

interface Props {
  message: string
  counter: number
  data: Data
  handleGetCategory: (data: Data) => void
}

export default function RevealPopUp({
  message,
  counter,
  data,
  handleGetCategory,
}: Props) {
  const navigate = useNavigate()

  function handleEndGame() {
    navigate('/game-results')
  }

  return (
    <div className="popup-overlay">
      <div className="answer-popup">
        {/* <img /> */}
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
