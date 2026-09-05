// 962. Maximum Width Ramp
// 最後練習時間：2026-09-05
// https://leetcode.com/problems/maximum-width-ramp/

console.clear()

// 暴力窮舉
// Time: O(n^2)
// Space: O(n)
// function maxWidthRamp(nums: number[]): number {
//   // 記有可能的左端點清單，嚴格遞減
//   const lefts: { num: number, index: number }[] = []
//   let maxWidth = 0

//   for (let index = 0; index < nums.length; index++) {
//     const num = nums[index]

//     if (!lefts.length || num < lefts.at(-1).num) {
//       lefts.push({ num, index })
//       continue
//     }
//   }

//   for (let index = nums.length - 1; index > 0; index--) {
//     const num = nums[index]

//     for (const node of lefts) {
//       if (node.num <= num) {
//         maxWidth = Math.max(maxWidth, index - node.index)
//         break
//       }
//     }

//   }

//   return maxWidth
// }

// 雙指標?
// Time: O(n)
// Space: O(n)
function maxWidthRamp(nums: number[]): number {
  const possibleLefts: { num: number, index: number }[] = []
  const possibleRights: { num: number, index: number }[] = []

  for (
    let i = 0, j = nums.length - 1;
    i < nums.length - 1 && j >= 0;
    i++, j--
  ) {
    const left = nums[i]
    const right = nums[j]

    if (!possibleLefts.length || possibleLefts.at(-1).num > left) {
      possibleLefts.push({ num: left, index: i })
    }

    if (!possibleRights.length || possibleRights.at(-1).num < right) {
      possibleRights.push({ num: right, index: j })
    }
  }

  // console.log(possibleLefts, possibleRights)

  let i = 0  // 指向 possibleLefts
  let j = possibleRights.length - 1  // 指向 possibleRights
  let max = 0

  while (i < possibleLefts.length && j >= 0) {
    if (possibleLefts[i].num <= possibleRights[j].num) {
    // 配對成功，先記錄寬度，再試著把 right 往更遠推（index 更大，但值更小，看還撐不撐得住）
      max = Math.max(max, possibleRights[j].index - possibleLefts[i].index)
      j--
    } else {
    // left 太大，配不上目前這個 right；換一個更小的 left 再試
      i++
    }
  }

  return max
}

console.log(maxWidthRamp([6, 0, 8, 2, 1, 5])) // 4
console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1])) // 7
console.log(maxWidthRamp([3, 3, 3])) // 2
console.log(maxWidthRamp([1, 2, 3])) // 2
console.log(maxWidthRamp([3, 2, 1])) // 0
console.log(maxWidthRamp([1, 2, 3, 4, 3, 2, 1])) // 6
console.log(maxWidthRamp([4, 3, 2, 1, 2, 3, 4])) // 6
console.log(maxWidthRamp([2, 2, 1])) // 1
console.log(maxWidthRamp([2, 3, 1])) // 1
console.log(maxWidthRamp([3, 2, 4, 1])) // 2
