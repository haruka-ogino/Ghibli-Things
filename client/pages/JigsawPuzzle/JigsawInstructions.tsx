import '../../styles/popup.css'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
export default function JigsawInstructions({ setShow }: Props) {
  return (
    <>
      <div className="popup-overlay" id="jigsaw-overlay">
        <div className="popup" style={{ width: '45em' }}>
          <button id="close" onClick={() => setShow(false)}>
            x
          </button>
          <h2>Instructions</h2>
          <ul style={{ textAlign: 'left' }}>
            <li>
              - To place a piece, click the piece and click on the place in the
              board where you wish to place it.
            </li>
            <li>- To remove a piece from the puzzle board, click it once.</li>
            <li>
              - You may also place a piece where another piece has already been
              placed on the puzzle board, and this will be return to the puzzle
              board.
            </li>
            <li>- Use the clue button if you need it and have fun!</li>
          </ul>
        </div>
      </div>
    </>
  )
}
