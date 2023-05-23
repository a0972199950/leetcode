// 62. Unique Paths

console.clear()

function uniquePaths(m: number, n: number): number {
  const matrix = []

  for (let row = 0; row < m; row++) {
    const rowSum = []

    for (let col = 0; col < n; col++) {
      if (row === 0 && col === 0) {
        rowSum.push(1)
        continue
      }

      const result = (matrix.at(-1)?.[col] ?? 0) + (rowSum[col - 1] || 0)
      rowSum.push(result)
    }

    matrix.push(rowSum)
  }

  console.log(matrix)
  return matrix.at(-1).at(-1)
}

// console.log(uniquePaths(3, 7))
// console.log(uniquePaths(3, 2))
console.log(uniquePaths(1, 1))
// console.log(uniquePaths(19, 13))

export {}
