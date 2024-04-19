// 1901. Find a Peak Element II

console.clear()

function findPeakGrid(mat: number[][]): number[] {
  const binarySearch = (leftBound: number, rightBound: number, max: number, row: number) => {
    if (leftBound >= rightBound) {
      return false
    }

    let foundMax = null
    let left = leftBound
    let right = rightBound

    while (right - left > 1) {
      // console.log('left: ', left, 'right: ', right)
      const middle = Math.ceil(left + (right - left) / 2)
      const middleNum = mat[row][middle]
      const rightNum = mat[row][middle + 1] || -1
      const leftNum = mat[row][middle - 1] || -1

      // console.log('middleNum: ', middleNum, 'leftNum: ', leftNum, 'rightNum: ', rightNum)

      if (leftNum === rightNum && leftNum > middleNum) {
        console.log('有這種 case')
        const result = binarySearch(leftBound, middle - 1, max, row)

        if (result !== false) {
          return result
        } else {
          return binarySearch(middle + 1, rightBound, max, row)
        }
      }

      if (rightNum > middleNum) {
        left = middle + 1
        continue
      }

      if (leftNum > middleNum) {
        right = middle - 1
        continue
      }

      foundMax = middle
      break
    }

    if (foundMax === null) {
      foundMax = mat[row][left] > mat[row][right] ? left : right
    }

    const foundMaxNum = mat[row][foundMax]

    console.log('foundMax: ', foundMax, 'foundMaxNum: ', foundMaxNum, 'max: ', max)

    if (foundMaxNum < max) {
      return false
    }

    if (foundMaxNum > (mat[row - 1]?.[foundMax] || -1) && foundMaxNum > (mat[row + 1]?.[foundMax] || -1)) {
      return foundMax
    }

    const result = binarySearch(leftBound, foundMax - 1, foundMaxNum, row)

    if (result !== false) {
      return result
    } else {
      return binarySearch(foundMax + 1, rightBound, foundMaxNum, row)
    }
  }

  for (let row = 0; row < mat.length; row++) {
    console.log('row: ', row)
    const col = binarySearch(0, mat[0].length - 1, -Infinity, row)

    if (col !== false) {
      return [row, col]
    }
  }
}

// console.log(findPeakGrid([[1, 4], [3, 2]]))
// console.log(findPeakGrid([[10, 20, 15], [21, 30, 14], [7, 16, 32]]))
// console.log(findPeakGrid([[5, 26, 48, 3, 28, 2, 30], [21, 37, 28, 37, 26, 46, 41], [27, 19, 8, 26, 2, 21, 11], [40, 30, 45, 24, 6, 28, 7], [16, 28, 38, 26, 34, 6, 26], [20, 48, 22, 15, 22, 50, 11], [5, 33, 41, 8, 34, 33, 13], [50, 23, 47, 42, 10, 16, 7], [10, 17, 13, 12, 39, 10, 49], [49, 42, 5, 50, 41, 32, 30]]))
// console.log(findPeakGrid([[7, 2, 3, 1, 2], [6, 5, 4, 2, 1]]))
console.log(findPeakGrid([[10, 50, 40, 30, 20], [1, 500, 2, 3, 4]]))
// console.log(findPeakGrid([[25, 37, 23, 37, 19], [45, 19, 2, 43, 26], [18, 1, 37, 44, 50]]))

export {}
