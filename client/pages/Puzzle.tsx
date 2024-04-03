import { useState } from 'react'

export default function Puzzle() {
  const img = 'https://www.ghibli.jp/gallery/mimi044.jpg'
  const width = 1920
  const height = 1038

  const [tiles, setTiles] = useState([...Array(9).keys()])
  console.log(tiles)

  const row = 3
  const col = 3
  const pieceWidth = width / col
  const pieceHeight = height / row
  const imgElement = document.createElement('img');
  return <p>hello</p>
}
