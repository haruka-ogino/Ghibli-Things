import { useNavigate } from 'react-router'
import { Data, Reveal } from '../../../models/ghibli'
import '../../styles/popup.css'

interface Props {
  reveal: Reveal
  counter: number
  data: Data
  handleGetCategory: (data: Data) => void
}

export default function RevealPopUp({
  reveal,
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
        <img src={reveal.img} alt={`the answer is ${reveal.message}`} />
        <h2>{reveal.message}</h2>
        {counter < 10 ? (
          <button onClick={() => handleGetCategory(data)}>Next Question</button>
        ) : (
          <button onClick={handleEndGame}>See Results</button>
        )}
      </div>
    </div>
  )
}
