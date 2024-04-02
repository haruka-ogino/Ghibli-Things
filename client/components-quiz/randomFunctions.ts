// - - - - RANDOM CATEGORY ITEM FNs - - - -

// // used just to get random number - inclusive of max and min
export function randomInt(min: number, max: number): number {
  const random = Math.floor(Math.random() * (max - min + 1) + min)
  // console.log(`random Int: ${random}`)
  return random
}
