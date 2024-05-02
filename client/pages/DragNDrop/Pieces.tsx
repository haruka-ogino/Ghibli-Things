import { useDrag } from 'react-dnd'

interface Props {
  piece: string
  i: number
}
export default function Pieces({ piece, i }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { type: 'image', piece },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div>
      <>
        <p style={{ border: '2px solid red' }}>{piece}</p>
      </>
    </div>
  )
}
