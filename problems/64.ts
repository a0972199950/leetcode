// 64. Minimum Path Sum

console.clear()

function minPathSum(grid: number[][]): number {
  const minSums = []

  for (let row = 0; row < grid.length; row++) {
    const rowMinSum = []

    for (let col = 0; col < grid[0].length; col++) {
      const val = grid[row][col]
      let sum = val

      if (row !== 0 || col !== 0) {
        sum = Math.min(
          val + (minSums.at(-1)?.[col] ?? Infinity),
          val + (rowMinSum[col - 1] ?? Infinity)
        )
      }

      rowMinSum.push(sum)
    }

    minSums.push(rowMinSum)
  }

  console.log(minSums)

  return minSums.at(-1).at(-1)
}

// minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
// minPathSum([[1, 2, 3], [4, 5, 6]])
minPathSum([[0, 0], [0, 0]])
// minPathSum([[1]])

export {}
