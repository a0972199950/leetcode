// 63. Unique Paths II

export {}
console.clear()

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const sums = []

  for (let row = 0; row < obstacleGrid.length; row++) {
    const rowSum = []

    for (let col = 0; col < obstacleGrid[0].length; col++) {
      const isObstacle = !!obstacleGrid[row][col]
      let sum = 0

      if (isObstacle) {
        sum = 0
      }
      else if (row === 0 && col === 0) {
        sum = 1
      }
      else {
        sum = (sums.at(-1)?.[col] ?? 0) + (rowSum[col - 1] || 0)
      }

      rowSum.push(sum)
    }

    sums.push(rowSum)
  }

  console.log(sums)
  return sums.at(-1).at(-1)
}

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
// console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]))


