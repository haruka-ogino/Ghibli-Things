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
        </div>
      </div>
    </>
  )
}
