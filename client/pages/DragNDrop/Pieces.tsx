import { useDrag } from 'react-dnd'

interface Props {
  piece: number
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
  // return (
  //   <div>
  //     <>
  //       <p
  //         ref={drag}
  //         style={{
  //           border: isDragging ? '0.5em solid rgb(56, 158, 163)' : '0px',
  //         }}
  //       >
  //         {piece}
  //       </p>
  //     </>
  //   </div>
  // )
  // function handleUrl(number: number): string {
  //   if (number < 10) {
  //     return `/images/soot-parts-easy/image_part_00${number}.png` as string
  //   } else {
  //     return `/images/soot-parts-easy/image_part_0${number}.png` as string
  //   }
  // }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      {piece > 0 && (
        <p
          className="piece"
          // src={handleUrl(piece)}
          // alt="puzzle piece"
          key={piece - 1}
          // onClick={handleClick}
          ref={drag}
          style={{
            border: isDragging ? '0.5em solid rgb(56, 158, 163)' : '0px',
          }}
        >
          {piece}
        </p>
      )}
    </>
  )
}
