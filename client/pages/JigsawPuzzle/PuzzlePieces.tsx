interface Props {
  number: number
  setPiece: React.Dispatch<React.SetStateAction<number>>
}

export default function PuzzlePieces({ number, setPiece }: Props) {
  function handleUrl(number: number): string {
    if (number < 10) {
      return `/images/soot-parts-easy/image_part_00${number}.png` as string
    } else {
      return `/images/soot-parts-easy/image_part_0${number}.png` as string
    }
  }

  function handleClick() {
    setPiece(number)
    console.log('piece grabbed')
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        className="piece"
        src={handleUrl(number)}
        alt="puzzle piece"
        key={number - 1}
        onClick={handleClick}
      />
    </>
  )
}
