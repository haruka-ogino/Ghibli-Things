import { useDrag } from 'react-dnd'

interface Props {
  url: string
  i: number
}

export default function PuzzlePieces({ url, i }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
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
        key={i}
      />
    </>
  )
}
