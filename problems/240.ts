// 240. Search a 2D Matrix II

console.clear()

// const searchMatrix = (matrix: number[][], target: number): boolean => {
//   const history = {}
//   let found = false

//   const find = (row: number, col: number) => {
//     const key = `${row},${col}`

//     if (found
//       || row >= matrix.length
//       || col >= matrix[0].length
//       || history[key]
//     ) {
//       return
//     }

//     if (matrix[row][col] === target) {
//       found = true
//     }
//     else {
//       history[key] = true
//       find(row + 1, col)
//       find(row, col + 1)
//     }
//   }

//   find(0, 0)
//   return found
// }

const searchMatrix = (matrix: number[][], target: number): boolean => {
  if (!matrix.length || !matrix[0].length) return false
  matrix = matrix.filter(row => row.at(0) <= target || row.at(-1) >= target)
  return matrix.some(row => row.includes(target))
}

console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5))
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20))
console.log(searchMatrix([], 1))
console.log(searchMatrix([[1, 2, 3]], 1))


