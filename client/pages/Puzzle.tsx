import { useState, useEffect } from 'react'

export default function Puzzle() {
  const img = 'https://www.ghibli.jp/gallery/ponyo021.jpg'
  // const width = 1920
  // const height = 1038

  // const [tiles, setTiles] = useState([...Array(9).keys()])
  // console.log(tiles)

  // const row = 3
  // const col = 3
  // const pieceWidth = width / col
  // const pieceHeight = height / row
  // const imgElement = document.createElement('img')

  useEffect(() => {
    // Create canvas and get 2D context
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    // Set canvas size (width and height)
    canvas.width = 1920 / 3
    canvas.height = 1038 / 3
    // crop starting and ending points
    const cropWidth = 1920 / 3
    const cropHeight = 1038 / 3
    const cropX = 0
    const cropY = 0

    // Load and draw image onto the canvas
    const imageObj = new Image()

    imageObj.onload = () => {
      // Draw the image at position (0, 0) on the canvas
      context?.drawImage(
        imageObj,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        canvas.width,
        canvas.height,
      )
    }
    imageObj.src = img

    // Append the canvas to the DOM or use it as needed
    document.body.appendChild(canvas)

    // Clean up function
    return () => {
      // Remove the canvas from the DOM if needed
      document.body.removeChild(canvas)
    }
  }, []) // Empty dependency array for useEffect to run once on mount

  return null // Since we manage canvas outside of the return block

  return <p>hello</p>
}
