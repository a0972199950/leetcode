// 73. Set Matrix Zeroes

console.clear()

function setZeroes(matrix: number[][]): void {
  const rows = new Set<number>()
  const cols = new Set<number>()

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const val = matrix[row][col]

      if (val === 0) {
        rows.add(row)
        cols.add(col)
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (rows.has(row) || cols.has(col)) {
        matrix[row][col] = 0
      }
    }
  }

  // console.log(matrix)
}

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])


