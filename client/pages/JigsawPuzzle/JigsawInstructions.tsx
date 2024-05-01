import '../../styles/popup.css'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
export default function JigsawInstructions({ setShow }: Props) {
  return (
    <>
      <div className="popup-overlay" id="jigsaw-overlay">
        <div className="popup">
          <button id="close" onClick={() => setShow(false)}>
            x
          </button>
          <h2>Instructions</h2>
          <ul>
            <li>To place a piece, drag it onto the puzzle board.</li>
            <li>To remove a piece from the puzzle board, click it once.</li>
            <li>Use the clue button and have fun!</li>
          </ul>
        </div>
      </div>
    </>
  )
}
