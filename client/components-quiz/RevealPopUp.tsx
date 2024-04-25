import { Data, Reveal } from '../../models/ghibli'
import '../styles/popup.css'

interface Props {
  reveal: Reveal
  counter: number
  data: Data
  handleGetCategory: (data: Data) => void
  setReveal: React.Dispatch<React.SetStateAction<Reveal | undefined>>
}

export default function RevealPopUp({
  reveal,
  counter,
  data,
  handleGetCategory,
  setReveal,
}: Props) {
  function handleEndGame() {
    setReveal({ ...reveal, showScore: true })
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <img src={reveal.img} alt={`the answer is ${reveal.message}`} />
        <h2>{reveal.message}</h2>
        {counter < 5 ? (
          <button onClick={() => handleGetCategory(data)}>Next Question</button>
        ) : (
          <button onClick={handleEndGame}>See Results</button>
        )}
      </div>
    </div>
  )
}
