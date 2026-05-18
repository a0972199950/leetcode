// 1011. Capacity To Ship Packages Within D Days
// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

export {}
console.clear()

// function shipWithinDays(weights: number[], days: number): number {
//   const getMinDays = (ship: number) => {
//     let shipWeight = 0
//     let ships = 1

//     for (const weight of weights) {
//       if (shipWeight + weight > ship) {
//         ships++
//         shipWeight = weight
//         continue
//       }

//       shipWeight += weight
//     }

//     return ships
//   }

//   let min = Math.max(...weights)
//   let max = weights.reduce((sum, weight) => sum + weight, 0)
//   let center

//   while (max - min > 1) {
//     center = Math.ceil(min + (max - min) / 2)

//     if (getMinDays(center) > days) {
//       min = center
//     } else {
//       max = center
//     }
//   }

//   return getMinDays(min) <= days ? min : max
// }

// Time: O(N * log(sum(weights)))
// Space: O(1)
function shipWithinDays(weights: number[], days: number): number {
  // 1. 二元搜尋找載重量
  // 最小載重量是最重的那個包裹，不能小於他
  // 最大載重量 = sum(weights)，一天內把所有包裹都運走

  // 例如 [1, 2, 3, 1, 1]，min = 3, max = 8
  // 如何確定給定一個載重量，最少要花幾天載完？順序不能更動

  // 2. 二元搜尋找天數
  // 好像走不通

  const canFinishShipWithinDays = (load: number) => {
    // console.log('load: ', load)
    let daysRequired = 1
    let currentLoad = 0

    for (const weight of weights) {
      currentLoad += weight

      if (currentLoad > load) {
        daysRequired++
        currentLoad = weight
        // console.log('加一天，當前', weight)
      }

      if (daysRequired > days) {
        // console.log('載不完')
        return false
      }
    }

    // console.log('載得完', daysRequired)
    return true
  }

  let left = 0
  let right = 0

  for (const weight of weights) {
    left = Math.max(left, weight)
    right += weight
  }

  while (left < right) {
    const middle = Math.floor(left + ((right - left) / 2))

    if (canFinishShipWithinDays(middle)) {
      // 找更小
      right = middle
    } else {
      left = middle + 1
    }
  }

  return left
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3))
console.log(shipWithinDays([1, 2, 3, 1, 1], 4))

