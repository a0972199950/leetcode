// 931. Minimum Falling Path Sum

console.clear()

function minFallingPathSum(matrix: number[][]): number {
  let lastMinResults = []
  let min = Infinity

  for (let row = matrix.length - 1; row >= 0; row--) {
    const nextMinResults = []

    for (let col = 0; col < matrix[0].length; col++) {
      const val = matrix[row][col]

      let minResult = val

      if (row !== matrix.length - 1) {
        minResult = Math.min(
          val + (lastMinResults[col - 1] ?? Infinity),
          val + lastMinResults[col],
          val + (lastMinResults[col + 1] ?? Infinity)
        )
      }

      if (row === 0) {
        min = Math.min(min, minResult)
      }

      nextMinResults.push(minResult)
    }

    lastMinResults = nextMinResults
  }

  console.log(lastMinResults, min)
  return min
}

minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]])
minFallingPathSum([[-19, 57], [-40, -5]])
minFallingPathSum([[48]])

export {}
