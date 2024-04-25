import '../../styles/popup.css'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function JigsawClue({ setShow }: Props) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close" onClick={() => setShow(false)}>
          x
        </button>
        <h2>Clue</h2>
      </div>
    </div>
  )
}
