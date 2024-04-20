export default function EasyPuzzle() {
  const imageNumbers = Array.from({ length: 15 }, (_, index) => index + 1)
  return (
    <>
      <div className="puzzle-type">
        <h2>Easy puzzles live here</h2>
        {imageNumbers.map((number, i) => (
          <img
            src={
              number < 10
                ? `/images/soot-parts-easy/image_part_00${number}.png`
                : `/images/soot-parts-easy/image_part_0${number}.png`
            }
            alt="puzzle piece"
            key={i}
          />
        ))}
      </div>
    </>
  )
}
