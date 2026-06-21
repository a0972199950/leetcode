// 1539. Kth Missing Positive Number

export {}
console.clear()

// Time: O(M)
// Space: O(1)
// function findKthPositive(arr: number[], k: number): number {
//   let pointer = 0
//   let missingCount = 0

//   for (let num = 1; num <= arr.at(-1); num++) {
//     if (arr[pointer] === num) {
//       // 有數字
//       pointer++
//     } else {
//       missingCount++
//     }

//     if (missingCount === k) {
//       return num
//     }
//   }

//   return arr.at(-1) + (k - missingCount)
// }

// Time: O(logN)
// Space: O(1)
function findKthPositive(arr: number[], k: number): number {
  // 二元搜尋 index，找出 "大於目標 missing number 的，並存在於陣列中的最小的數"
  let left = 0
  let right = arr.length

  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2)

    const totalMissingOnLeft = arr[middle] - middle - 1

    if (totalMissingOnLeft >= k) {
      // 嘗試找更小
      right = middle
    } else {
      left = middle + 1
    }
  }

  // console.log('left: ', left)

  return left + k
  
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5))
// console.log(findKthPositive([1, 2, 3, 4], 2))
console.log(findKthPositive([4, 5], 7))
console.log(findKthPositive([4, 5], 2))
// console.log(findKthPositive([2], 1))

// i n
// 0 2 => 1
// 1 3 => 1
// 2 4 => 1
// 3 7 => 3
// 4 11 => 11 - 4 - 1 = 左邊總共少多少 = 6
