// 3113. Find the Number of Subarrays Where Boundary Elements Are Maximum
export {}
console.clear()

// Time: O(n^3)
// Space O(n^2)
// function numberOfSubarrays(nums: number[]): number {
//   let result = 0

//   const findMax = (arr: number[]) => {
//     let max = -Infinity
//     for (const num of arr) {
//       max = Math.max(num, max)
//     }

//     return max
//   }

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       const subArray = nums.slice(i, j)

//       if (subArray[0] === subArray.at(-1) && findMax(subArray) === subArray[0]) {
//         result++
//       }
//     }
//   }

//   return result
// }

// Time: O(n^2log n)
// Space: O(n)
// function numberOfSubarrays(nums: number[]): number {
//   let result = 0

//   for (let i = 0; i < nums.length; i++) {
//     let max = 0

//     for (let j = i; j < nums.length; j++) {
//       max = Math.max(max, nums[j])
//       if (nums[i] === nums[j] && max === nums[i]) result++
//     }
//   }

//   return result
// }

// Time: O(n)
// Space: O(n)
function numberOfSubarrays(nums: number[]): number {
  let result = 0
  const decreasingStack: { value: number, count: number }[] = []

  for (const num of nums) {
    // push 進遞減棧，不斷 pop 尾部直到遇到和自己一樣大的

    while (decreasingStack.length && decreasingStack.at(-1).value < num) {
      decreasingStack.pop()
    }

    if (decreasingStack.length && decreasingStack.at(-1).value === num) {
      decreasingStack.at(-1).count++
    } else {
      decreasingStack.push({ value: num, count: 1 })
    }

    result += decreasingStack.at(-1).count
  }

  return result
}

console.log(numberOfSubarrays([1, 4, 3, 3, 2]))
console.log(numberOfSubarrays([3, 3, 3]))
console.log(numberOfSubarrays([1]))
console.log(numberOfSubarrays([5, 4, 3, 2, 1]))
console.log(numberOfSubarrays([6, 26, 6]))
