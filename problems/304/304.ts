// 304. Range Sum Query 2D - Immutable
// 最後練習時間：2022-10-22
// https://leetcode.com/problems/range-sum-query-2d-immutable/

export {}
console.clear()

class NumMatrix {
  data: number[][]
  prefixSum: number[][] = []

  constructor(matrix: number[][]) {
    this.data = matrix

    for (let row = 0; row < matrix.length; row++) {
      this.prefixSum.push([])

      for (let col = 0; col < matrix[0].length; col++) {
        const val = matrix[row][col]
        const sum = val
         + (this.prefixSum.at(-2)?.[col] ?? 0)
         + (this.prefixSum.at(-1)?.[col - 1] ?? 0)
         - (this.prefixSum.at(-2)?.[col - 1] ?? 0)

        this.prefixSum.at(-1).push(sum)
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.prefixSum[row2][col2]
     - (this.prefixSum[row1 - 1]?.[col2] ?? 0)
     - (this.prefixSum[row2][col1 - 1] ?? 0)
     + (this.prefixSum[row1 - 1]?.[col1 - 1] ?? 0)
  }
}

const matrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
console.log(matrix.prefixSum) // Expected: [ [ 3, 3, 4, 8, 10 ], [ 8, 14, 18, 24, 27 ], [ 9, 17, 21, 28, 36 ], [ 13, 22, 26, 34, 49 ], [ 14, 23, 30, 38, 58 ] ]

console.log(matrix.sumRegion(2, 1, 4, 3)) // Expected: 8
console.log(matrix.sumRegion(1, 1, 2, 2)) // Expected: 11
console.log(matrix.sumRegion(1, 2, 2, 4)) // Expected: 12

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/


