// 1314. Matrix Block Sum

console.clear()

function matrixBlockSum(mat: number[][], k: number): number[][] {
  const prefixSum = []

  for (let row = 0; row < mat.length; row++) {
    const rowSum = []

    for (let col = 0; col < mat[0].length; col++) {
      const val = mat[row][col]
      const upSum = prefixSum.at(-1)?.[col] ?? 0
      const leftSum = rowSum[col - 1] ?? 0
      const upLeftSum = prefixSum.at(-1)?.[col - 1] ?? 0

      const sum = val + upSum + leftSum - upLeftSum
      rowSum.push(sum)
    }

    prefixSum.push(rowSum)
  }

  const blockSum = []

  const getMaxRow = (possibleRow: number) => {
    return Math.min(possibleRow, mat.length - 1)
  }

  const getMaxCol = (possibleCol: number) => {
    return Math.min(possibleCol, mat[0].length - 1)
  }

  for (let row = 0; row < mat.length; row++) {
    const rowSum = []

    for (let col = 0; col < mat[0].length; col++) {
      const val = prefixSum[getMaxRow(row + k)][getMaxCol(col + k)]
      const upSum = prefixSum[row - k - 1]?.[getMaxCol(col + k)] ?? 0
      const leftSum = prefixSum[getMaxRow(row + k)]?.[col - k - 1] ?? 0
      const upLeftSum = prefixSum[row - k - 1]?.[col - k - 1] ?? 0

      const sum = val - upSum - leftSum + upLeftSum
      rowSum.push(sum)
    }

    blockSum.push(rowSum)
  }

  console.log(prefixSum)
  console.log(blockSum)
  return blockSum
}

matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)
matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2)

export {}
