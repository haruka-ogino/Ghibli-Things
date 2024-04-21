import { useDrag } from 'react-dnd'

interface Props {
  url: string
  number: number
}

export default function PuzzlePieces({ url, number }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { number: number } as { number: number },
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
