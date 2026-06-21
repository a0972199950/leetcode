// 875. Koko Eating Bananas
// https://leetcode.com/problems/koko-eating-bananas/

export {}
console.clear()

// function minEatingSpeed(piles: number[], h: number): number {
//   let min = 1
//   let max = Math.max(...piles)

//   const canFinish = (minSpeed: number) => {
//     let minHours = 0
//     for (let i = 0; i < piles.length; i++) {
//       minHours += Math.ceil(piles[i] / minSpeed)
//       if (minHours > h) {
//         return false
//       }
//     }

//     return true
//   }

//   while (max - min > 1) {
//     console.log(`min: ${min}, max: ${max}`)
//     const center = Math.ceil(min + (max - min) / 2)
//     console.log('center: ', center)
    
//     if (canFinish(center)) {
//       // try less
//       max = center
//     } else {
//       // try more
//       min = center + 1
//     }
//   }

//   if (canFinish(min)) {
//     return min
//   } else {
//     return max
//   }
// }

// Time: O(logK * N)
// Space: O(1)
function minEatingSpeed(piles: number[], h: number): number {
  // 要找每小時吃的最少香蕉數 k
  // 假設時間一定夠吃完香蕉
  // max k = Max(piles)
  // [3,6,7,11] => min <= k <= 11
  // min 從 1 開始的每個數字都有可能
  // 找中間 => 6, 吃得完嗎
  // 吃得完 => 那能再小嗎 => 多小? => (1, 6) 的中間
  // 吃不完 => 那要找更大 => 多大? => (6, 11) 的中間

  // 怎麼快速確認一個數字能不能吃完所有香蕉? 遍歷? 先用遍歷再想想怎麼優化

  const canFinishEating = (k: number) => {
    let hours = 0

    for (const pile of piles) {
      const unit = Math.ceil(pile / k)
      hours += unit

      if (hours > h) {
        return false
      }
    }

    return true
  }

  const max = Math.max(...piles)

  let left = 1
  let right = max

  while (right !== left) {
    const middle = Math.floor(left + ((right - left) / 2))
    // console.log(left, right, 'middle: ', middle, canFinishEating(middle))

    if (canFinishEating(middle)) {
      // 吃得完 => 那能再小嗎 => 多小? => (1, 6) 的中間
      right = middle
    } else {
      left = middle + 1
    }
  }

  return left
}

console.log(minEatingSpeed([3, 6, 7, 11], 8)) // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)) // 23
console.log(minEatingSpeed([312884470], 968709470)) // 1

