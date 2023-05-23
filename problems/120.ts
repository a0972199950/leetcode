// 120. Triangle

console.clear()

function minimumTotal(triangle: number[][]): number {
  let lastMinResults = triangle.at(-1)

  for (let row = triangle.length - 1; row >= 0; row--) {
    const nextMinResults = []

    for (let col = 0; col <= row; col++) {
      const val = triangle[row][col]
      let minResult = val

      if (row !== triangle.length - 1) {
        minResult = Math.min(
          val + lastMinResults[col],
          val + lastMinResults[col + 1]
        )
      }

      nextMinResults.push(minResult)
    }

    lastMinResults = nextMinResults
    console.log(nextMinResults)
  }

  console.log(lastMinResults)

  return lastMinResults[0]
}

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])
minimumTotal([[-10]])

export {}
