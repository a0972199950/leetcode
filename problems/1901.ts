// 1901. Find a Peak Element II

console.clear()

function findPeakGrid(mat: number[][]): number[] {
  const binarySearch = (leftBound: number, rightBound: number, row: number) => {
    let left = leftBound
    let right = rightBound
    let middle = null

    while (right >= left) {
      const _middle = Math.floor(left + (right - left) / 2)
      const _middleNum = mat[row][_middle]
      const rightNum = mat[row][_middle + 1] ?? -1
      const leftNum = mat[row][_middle - 1] ?? -1

      if (_middleNum > rightNum && _middleNum > leftNum) {
        middle = _middle
        break
      } else if (_middleNum < rightNum && _middleNum > leftNum) {
        left = _middle + 1
        continue
      } else if (_middleNum > rightNum && _middleNum < leftNum) {
        right = _middle - 1
        continue
      } else {
        // 當前 middle 為波谷
        return binarySearch(leftBound, _middle - 1, row) || binarySearch(_middle + 1, rightBound, row)
      }
    }

    // 找不到波峰
    if (middle === null) {
      return null
    }

    // 當前為水平波峰，同時為垂直波峰
    const middleNum = mat[row][middle]
    const upNum = mat[row - 1]?.[middle] ?? -1
    const downNum = mat[row + 1]?.[middle] ?? -1
    if (middleNum > upNum && middleNum > downNum) {
      return middle
    }

    // 當前為水平波峰，但非垂直波峰，將 array 分成左右兩半尋找下一個水平波峰
    return binarySearch(leftBound, middle - 1, row) || binarySearch(middle + 1, rightBound, row)
  }

  for (let row = 0; row < mat.length; row++) {
    const col = binarySearch(0, mat[row].length - 1, row)

    if (col !== null) {
      return [row, col]
    }
  }
}

// console.log(findPeakGrid([[1, 4], [3, 2]]))
// console.log(findPeakGrid([[10, 20, 15], [21, 30, 14], [7, 16, 32]]))
// console.log(findPeakGrid([[5, 26, 48, 3, 28, 2, 30], [21, 37, 28, 37, 26, 46, 41], [27, 19, 8, 26, 2, 21, 11], [40, 30, 45, 24, 6, 28, 7], [16, 28, 38, 26, 34, 6, 26], [20, 48, 22, 15, 22, 50, 11], [5, 33, 41, 8, 34, 33, 13], [50, 23, 47, 42, 10, 16, 7], [10, 17, 13, 12, 39, 10, 49], [49, 42, 5, 50, 41, 32, 30]]))
// console.log(findPeakGrid([[7, 2, 3, 1, 2], [6, 5, 4, 2, 1]]))
// console.log(findPeakGrid([[10, 50, 40, 30, 20], [1, 500, 2, 3, 4]]))
console.log(findPeakGrid([[25, 37, 23, 37, 19], [45, 19, 2, 43, 26], [18, 1, 37, 44, 50]]))

export {}
