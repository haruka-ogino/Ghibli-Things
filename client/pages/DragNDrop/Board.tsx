import { useDrop } from 'react-dnd'

export default function Board() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { number: number }) => placePiece(item.piece),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))
}
