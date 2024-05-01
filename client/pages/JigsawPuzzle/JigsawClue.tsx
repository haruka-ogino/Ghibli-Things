import '../../styles/popup.css'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function JigsawClue({ setShow }: Props) {
  return (
    <div className="popup-overlay" id="jigsaw-overlay">
      <div className="popup">
        <button id="close" onClick={() => setShow(false)}>
          x
        </button>
        <h2>Clue</h2>
        <img
          src="/images/soot-parts-easy/soots-clue-easy.png"
          alt="puzzle solution with some paint splotches"
        />
      </div>
    </div>
  )
}
