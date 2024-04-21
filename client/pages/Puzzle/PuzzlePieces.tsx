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
        ref={drag}
        style={{ border: isDragging ? '2px solid pink' : '0px' }}
        className="piece"
        src={url}
        alt="puzzle piece"
        key={number - 1}
      />
    </>
  )
}
