// import { useDrag } from 'react-dnd'

interface Props {
  number: number
  setPiece: React.Dispatch<React.SetStateAction<number>>
}

export default function PuzzlePieces({ number, setPiece }: Props) {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: 'image',
  //   item: { type: 'image', number: number },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }))

  // console.log(number)

  function handleUrl(number: number): string {
    if (number < 10) {
      return `/images/soot-parts-easy/image_part_00${number}.png` as string
    } else {
      return `/images/soot-parts-easy/image_part_0${number}.png` as string
    }
  }

  function handleClick() {
    setPiece(number)
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        // ref={number === 90 ? null : drag}
        // style={{
        //   border: isDragging ? '0.5em solid rgb(56, 158, 163)' : '0px',
        // }}
        className="piece"
        src={handleUrl(number)}
        alt="puzzle piece"
        key={number - 1}
        onClick={handleClick}
      />
    </>
  )
}
