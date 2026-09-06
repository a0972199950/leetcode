// 1552. Magnetic Force Between Two Balls
// 最後練習時間：2026-09-06
// https://leetcode.com/problems/magnetic-force-between-two-balls/

console.clear()

// 二分對象不對。根據可能的 index 做二分，cover 不到偶數球
// 二分的精隨是範圍對象中每個數字都有可能，盡量找其中最大或最小，"並且每次可以明確排除一整半"
// 對 index 做二分，無法排除一整半
// Time: O(n)
// Space: O(n)
// function maxDistance(_position: number[], m: number): number {
//   const sorted = _position
//     .toSorted((a, b) => a - b)
//     .map((position, index) => {
//       return {
//         hasBall: index === 0 || index === _position.length - 1,
//         position
//       }
//     })

//   let distance = sorted[sorted.length - 1].position - sorted[0].position
//   m -= 2

//   const binarySearch = (leftBall: number, rightBall: number) => {
//     let left = leftBall + 1
//     let right = rightBall - 1

//     while (right > left) {
//       console.log('left', left, 'right', right)
//       const middle = Math.floor(left + (right - left) / 2)

//       // 算與 ball 的絕對值
//       const leftDistance = sorted[middle].position - sorted[leftBall].position
//       const rightDistance = sorted[rightBall].position - sorted[middle].position

//       // if (leftDistance === rightDistance) {
//       //   break
//       // }

//       if (leftDistance >= rightDistance) {
//         // 往左找
//         console.log('左')
//         right = middle
//       }

//       if (leftDistance < rightDistance) {
//         // 往右找
//         console.log('右')
//         left = middle + 1
//       }

//       console.log('middle: ', middle)
//     }

//     const leftDistance = sorted[left].position - sorted[leftBall].position
//     const rightDistance = sorted[rightBall].position - sorted[left].position

//     if (sorted[left].hasBall || m <= 0) {
//       return
//     }

//     distance = Math.min(distance, leftDistance, rightDistance)
//     m--
//     sorted[left].hasBall = true

//     console.log('stop', sorted, left)

//     if (m) {
//       binarySearch(leftBall, left)
//     }

//     if (m) {
//       binarySearch(left, rightBall)
//     }
//   }
  
//   binarySearch(0, sorted.length - 1)

//   return distance
// }

// 用相鄰兩球可能最小距離做二分，如此可以明確排除一整半
// Time: O(n log n)
// Space: O(n)
function maxDistance(_position: number[], m: number): number {
  const sorted = _position.toSorted((a, b) => a - b)

  // 用相鄰兩球可能最小距離做二分，如果可以，再試著找大一點，直到最大值
  let left = 1 // 相鄰兩球最小可能距離
  let right = sorted.at(-1) - sorted[0] // 相鄰兩球最大可能距離

  let max = 1

  const isDistancePossible = (distance: number) => {
    let remain = m - 1 // 鎖頭，第一個一定有球。雖然題目保證至少兩顆球(代表頭尾一定有一顆)，但尾巴不鎖代碼比較好寫
    let lastPosition = sorted[0]

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] - lastPosition >= distance) {
        remain--
        lastPosition = sorted[i]
        if (remain === 0) {
          break
        }
      }
    }

    return remain === 0
  }

  while (right >= left) {
    const middle = Math.floor(left + (right - left) / 2)

    if (isDistancePossible(middle)) {
      max = middle
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return max
}

console.log('ans: ', maxDistance([1, 2, 3, 4, 7], 3)) // 3
console.log('ans: ', maxDistance([1, 2, 3, 4, 7], 4)) // 1
console.log('ans: ', maxDistance([1, 97, 98, 99, 100], 3)) // 3
console.log('ans: ', maxDistance([1, 97, 98, 99, 100], 4)) // 1
console.log('ans: ', maxDistance([5, 4, 3, 2, 1, 1000000000], 2)) // 999999999
console.log('ans: ', maxDistance([5, 9, 12, 16, 25], 2)) // 20
console.log('ans: ', maxDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)) // 2
console.log('ans: ', maxDistance([1, 2, 3, 4, 5, 100], 3)) // 4
