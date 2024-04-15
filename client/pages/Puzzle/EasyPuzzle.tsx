export default function EasyPuzzle() {
  const imageNumbers = Array.from({ length: 15 }, (_, index) => index + 1)
  return (
    <>
      <div className="puzzle-type">
        <h2>Easy puzzles live here</h2>
        {imageNumbers.map((number, i) => (
          <img
            src={
              number < 10 ? `/image_part_00${number}` : `/image_part_0${number}`
            }
            alt="puzzle piece"
            key={i}
          />
        ))}
      </div>
    </>
  )
}
