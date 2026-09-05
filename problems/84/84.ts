// 84. Largest Rectangle in Histogram
// 最後練習時間：2026-09-05
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

// 嚴格非遞減(可以是平的) stack，遇到變小的，就計算 "每一次 pop 掉的" 最大面積
// Time: O(n)
// Space: O(n)
function largestRectangleArea(heights: number[]): number {
  const stack: { index: number, height: number}[] = []
  let max = 0

  for (let index = 0; index <= heights.length; index++) {
    const height = heights[index] ?? 0

    const rightBoundary = index

    while (stack.length && stack.at(-1).height > height) {
      const node = stack.pop()
      
      const leftBoundary = stack.at(-1)?.index ?? -1
      // 這兩個都是 "不包含" width 的邊界
      const width = rightBoundary - leftBoundary - 1
      max = Math.max(max, width * node.height)
    }

    stack.push({ height, index })
  }

  return max
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])) // 10
console.log(largestRectangleArea([2, 4])) // 4
console.log(largestRectangleArea([1, 2, 3, 4, 5])) // 9
console.log(largestRectangleArea([5, 4, 3])) // 9
console.log(largestRectangleArea([2, 0, 2])) // 2
console.log(largestRectangleArea([5, 5, 5, 5])) // 20
console.log(largestRectangleArea([0])) // 0
