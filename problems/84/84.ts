// 84. Largest Rectangle in Histogram
// 最後練習時間：2026-09-03
// 解題狀態：未解出
// https://leetcode.com/problems/largest-rectangle-in-histogram/
console.clear()

// 倒水法
// Time: O(n^2)
// Time: O(1)
// function largestRectangleArea(heights: number[]): number {
//   const bottom = Math.min(...heights)
//   const top = Math.max(...heights)

//   let max = -Infinity

//   for (let i = bottom; i <= top; i++) {
//     let count = 0

//     for (const height of heights) {
//       if (height < i) {
//         max = Math.max(max, count * i)
//         count = 0
//       } else {
//         count++
//       }
//     }

//     max = Math.max(max, count * i)
//   }

//   return max
// }

// 倒水法優化常數版
// Time: O(n log n + n ^ n/2)
// Space: O(n)
// function largestRectangleArea(heights: number[]): number {
  
//   const sorted = heights.toSorted((a, b) => a - b)

//   let max = -Infinity
//   let index = 0
//   let current = sorted[index]
//   let remain: number[][] = [
//     heights.map((_, i) => i)
//   ]

//   while (index < heights.length) {
//     // console.log(max, remain)
//     const nextRemain: number[][] = []

//     for (const partialIndexes of remain) {
//       let count = 0
//       let partial = []

//       for (const partialIndex of partialIndexes) {
//         count++

//         if (heights[partialIndex] > current) {
//           partial.push(partialIndex)
//         } else {
//           if (partial.length) {
//             nextRemain.push(partial)
//           }
//           partial = []
//         }

//         // console.log('partialIndex: ', partialIndex, heights[partialIndex], current, 'nextRemain: ', nextRemain)
//       }

//       if (partial.length) {
//         nextRemain.push(partial)
//       }

//       max = Math.max(max, count * current)
//     }

//     // console.log('nextRemain', nextRemain)

//     remain = nextRemain

//     while (sorted[index] === current) {
//       index++
//     }

//     current = sorted[index]
    
//   }

//   return max
// }

// 遞增 stack（不用哨兵，改用收尾迴圈把剩下的清掉）
// Time: O(n)
// Space: O(n)
function largestRectangleArea(heights: number[]): number {
  const n = heights.length
  const stack: { index: number, height: number }[] = []
  let max = 0

  for (let i = 0; i < n; i++) {
    const height = heights[i]

    // 遇到比堆疊頂端矮的 bar，就結算頂端 node
    while (stack.length && stack.at(-1)!.height > height) {
      const node = stack.pop()!
      // node 的矩形實際站在 [l, r] 這幾格上（含兩端），每一格都 ≥ node.height
      const left = stack.length ? stack.at(-1)!.index + 1 : 0 // 左邊那根的下一格；沒有就從第 0 格
      const right = i - 1                                       // 當前 bar 的前一格
      max = Math.max(max, node.height * (right - left + 1))
    }

    stack.push({ index: i, height })
  }

  // 收尾：剩下的 bar 右邊都沒有更矮的，矩形一路站到最後一格 n-1。
  // 由左到右掃，左邊那根就是 stack[k-1]
  for (let k = 0; k < stack.length; k++) {
    const node = stack[k]
    const l = k > 0 ? stack[k - 1].index + 1 : 0
    const r = n - 1
    max = Math.max(max, node.height * (r - l + 1))
  }

  return max
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])) // 10
console.log(largestRectangleArea([2, 4])) // 4
console.log(largestRectangleArea([1, 2, 3, 4, 5])) // 9
console.log(largestRectangleArea([5, 4, 3])) // 9
console.log(largestRectangleArea([2, 0, 2])) // 2
console.log(largestRectangleArea([5, 5, 5, 5])) // 20
