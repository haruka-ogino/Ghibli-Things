import { useDrag } from 'react-dnd'

interface Props {
  url: string
  number: number
  index: number
}

export default function PuzzlePieces({ url, number, index }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { number, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <>
      <img
        ref={number === 90 ? null : drag}
        style={{
          border: isDragging ? '0.5em solid rgb(56, 158, 163)' : '0px',
        }}
        className="piece"
        src={url}
        alt="puzzle piece"
        key={number - 1}
      />
    </>
  )
}
