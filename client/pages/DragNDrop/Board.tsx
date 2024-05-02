import { useDrop } from 'react-dnd'
interface Props {
  thing: string
  i: number
}
export default function Board({ thing, i }: Props) {
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: 'image',
  //   drop: (item: { number: number }) => placePiece(item.piece),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }))
  return (
    <>
      <div>{thing}</div>
    </>
  )
}
