// 48. Rotate Image

export {}
console.clear()

/**
 Do not return anything, modify matrix in-place instead.
 */


function rotate(matrix: number[][]): void {
  const length = matrix.length

  const findNextCoor = ([row, col]) => {
    const nextRow = col
    const nextCol = matrix.length - 1 - row

    return [nextRow, nextCol]
  }

  for (let layer = 0; layer <= Math.floor((length - 1) / 2); layer++) {
    for (let round = layer; round <= length - layer - 2; round++) {
      console.log(layer, round)
      let temp = null
      let row = layer
      let col = round

      for (let i = 1; i <= 5; i++) {
        const [nextRow, nextCol] = findNextCoor([row, col])
        console.log(`${row}, ${col} => ${nextRow}, ${nextCol}`)

        if (i === 1) {
          temp = matrix[row][col]
        }
        else {
          const _temp = matrix[row][col]
          matrix[row][col] = temp
          temp = _temp
        }

        row = nextRow
        col = nextCol
      }
    }
  }

  console.log(matrix)
}

// rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])
rotate([[1, 2], [3, 4]])

// rotate(2)
// rotate(3)
// rotate(4)
// rotate(5)


