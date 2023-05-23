// 221. Maximal Square

console.clear()

function maximalSquare(matrix: string[][]): number {
  let lastRowMaxSquare = null
  let max = 0

  for (let row = 0; row < matrix.length; row++) {
    const rowMaxSquare = []

    for (let col = 0; col < matrix[0].length; col++) {
      const val = Number(matrix[row][col])

      if (!val) {
        rowMaxSquare.push(0)
        continue
      }

      const prefix = Math.min(
        (lastRowMaxSquare?.[col] ?? 0),
        (rowMaxSquare[col - 1] ?? 0),
        (lastRowMaxSquare?.[col - 1] ?? 0)
      )

      // console.log([row, col], val, [(maxSquares.at(-1)?.[col] ?? 0), (rowMaxSquare[col - 1] ?? 0)])

      const sum = Math.pow(prefix + 1, 2)
      max = Math.max(max, sum)
      rowMaxSquare.push(prefix + 1)
    }

    lastRowMaxSquare = rowMaxSquare
  }

  console.log(lastRowMaxSquare, max)
  return max
}

maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']])
maximalSquare([['0', '1'], ['1', '0']])
maximalSquare([['0']])
maximalSquare([['1', '1', '1'], ['1', '1', '1'], ['1', '1', '1']])

export {}
