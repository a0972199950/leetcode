// 84. Largest Rectangle in Histogram
// 最後練習時間：2026-09-02
// https://leetcode.com/problems/largest-rectangle-in-histogram/
console.clear()

// Time: O(n^2)
// Time: O(1)
function largestRectangleArea(heights: number[]): number {
  // 到水法
  const bottom = Math.min(...heights)
  const top = Math.max(...heights)

  let max = -Infinity

  for (let i = bottom; i <= top; i++) {
    let count = 0

    for (const height of heights) {
      if (height < i) {
        max = Math.max(max, count * i)
        count = 0
      } else {
        count++
      }
    }

    max = Math.max(max, count * i)
  }

  return max
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])) // 10
console.log(largestRectangleArea([2, 4])) // 4
console.log(largestRectangleArea([1, 2, 3, 4, 5])) // 9
console.log(largestRectangleArea([5, 4, 3, 2, 1])) // 9
