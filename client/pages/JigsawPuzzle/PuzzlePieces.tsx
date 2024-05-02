import { useDrag } from 'react-dnd'

interface Props {
  piece: number
  setPiece: React.Dispatch<React.SetStateAction<number>>
}

export default function PuzzlePieces({ piece, setPiece }: Props) {
  function handleUrl(number: number): string {
    if (number < 10) {
      return `/images/soot-parts-easy/image_part_00${number}.png` as string
    } else {
      return `/images/soot-parts-easy/image_part_0${number}.png` as string
    }
  }

  // function handleClick() {
  //   setPiece(number)
  // }

  // return (
  //   <>
  //     {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
  //     <img
  //       className="piece"
  //       src={handleUrl(number)}
  //       alt="puzzle piece"
  //       key={number - 1}
  //       onClick={handleClick}
  //     />
  //   </>
  // )
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { type: 'image', piece },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <>
      {piece > 0 && (
        <img
          src={handleUrl(piece)}
          alt="puzzle piece"
          ref={drag}
          style={{
            border: isDragging ? '0.5em solid rgb(56, 158, 163)' : '0px',
          }}
          key={piece - 1}
          className="piece"
        />
      )}
    </>
  )
}

// need to check CSS as there is undesirable movement
// check how we are placing the piece, so as to prevent all puzzle pieces from moving every time one is placed
