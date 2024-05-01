import { useDrag } from 'react-dnd'

interface Props {
  // url: string
  number: number
  index: number
}

export default function PuzzlePieces({ number, index }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { type: 'image', number: number },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  console.log(number)

  function handleUrl(number: number): string {
    if (number < 10) {
      return `/images/soot-parts-easy/image_part_00${number}.png` as string
    } else {
      return `/images/soot-parts-easy/image_part_0${number}.png` as string
    }
  }

  return (
    <>
      <img
        ref={number === 90 ? null : drag}
        style={{
          border: isDragging ? '0.5em solid rgb(56, 158, 163)' : '0px',
        }}
        className="piece"
        src={handleUrl(number)}
        alt="puzzle piece"
        key={number - 1}
      />
    </>
  )
}
