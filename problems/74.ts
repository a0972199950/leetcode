// 74. Search a 2D Matrix

export {}
console.clear()

// Time: O(logN + logM), N === matrix.length; M === row.length
// Space: O(1)
// function searchMatrix(matrix: number[][], target: number): boolean {
//   // 1. 二元搜尋找 row，檢查頭尾
//   let left = 0
//   let right = matrix.length - 1
//   let targetRow = null

//   while (left !== right) {
//     const middle = Math.floor(left + ((right - left) / 2))
//     const middleRow = matrix[middle]
//     // console.log('middleRow: ', middleRow)

//     if (middleRow[0] <= target && middleRow.at(-1) >= target) {
//       targetRow = middleRow
//       break
//     } else if (middleRow[0] > target) {
//       right = middle
//     } else if (middleRow[0] < target) {
//       left = middle + 1
//     }
//   }

//   if (!targetRow) {
//     targetRow = matrix[left]
//   }

//   // console.log('targetRow: ', targetRow)

//   // 2. row 裡面用二元搜尋找數字
//   left = 0
//   right = targetRow.length - 1

//   while (left !== right) {
//     const middle = Math.floor(left + ((right - left) / 2))
//     const middleNum = targetRow[middle]

//     if (middleNum > target) {
//       right = middle
//     } else if (middleNum < target) {
//       left = middle + 1
//     } else {
//       return true
//     }
//   }

//   return targetRow[left] === target
// }

// Time: O(log(N * M)), N === matrix.length; M === row.length
// Space: O(1)
function searchMatrix(matrix: number[][], target: number): boolean {
  // 直接把二維陣列攤平成一維陣列後，用 binary search
  // 因為二維陣列已保證排序，所以一維陣列也是排序過的
  const totalLength = matrix.length * matrix[0].length

  const getNum = (index: number) => {
    const rowIndex = Math.floor(index / matrix[0].length)
    const colIndex = index % matrix[0].length
    // console.log('index: ', index, rowIndex, colIndex)
    return matrix[rowIndex][colIndex]
  }

  let left = 0
  let right = totalLength - 1

  // console.log('totalLength', totalLength)

  while (left !== right) {
    const middle = Math.floor(left + ((right - left) / 2))
    const middleNum = getNum(middle)

    if (middleNum === target) {
      return true
    } else if (middleNum > target) {
      right = middle
    } else if (middleNum < target) {
      left = middle + 1
    }
  }

  return getNum(left) === target
}

// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
console.log(searchMatrix([[1]], 2))
