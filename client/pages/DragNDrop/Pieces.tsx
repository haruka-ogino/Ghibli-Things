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
        <p
          ref={drag}
          style={{
            border: isDragging ? '0.5em solid rgb(56, 158, 163)' : '0px',
          }}
        >
          {piece}
        </p>
      </>
    </div>
  )
}
