// 11. Container With Most Water

export {}
console.clear()

// function maxArea(heights: number[]): number {
//   let max = -Infinity

//   for (let i = 0; i < heights.length; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//       max = Math.max(max, (j - i) * Math.min(heights[i], heights[j]))
//     }
//   }

//   return max
// }

// function maxArea(heights: number[]): number {
//   let left = 0
//   let right = heights.length - 1
//   let max = -Infinity

//   while (right > left) {
//     const water = (right - left) * Math.min(heights[left], heights[right])
//     max = Math.max(max, water)

//     if (heights[left] < heights[right]) {
//       left++
//     }
//     else if (heights[left] >= heights[right]) {
//       right--
//     }
//   }

//   return max
// }

function maxArea(heights: number[]): number {
  let left = 0
  let right = heights.length - 1

  let max = -Infinity

  while (right > left) {
    const water = Math.min(heights[left], heights[right]) * (right - left)
    max = Math.max(max, water)

    if (heights[left] < heights[right]) {
      left++
    } else if (heights[left] > heights[right]) {
      right--
    } else {
      left++
    }
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))


