// 456. 132 Pattern

export {}
console.clear()

// function find132pattern(nums: number[]): boolean {
//   for (let k = nums.length - 1; k >= 0; k--) {
//     const numK = nums[k]

//     let hasGreater = false
//     let hasSmaller = false
//     let current = k - 1

//     while (current >= 0 && (!hasGreater || !hasSmaller)) {
//       const num = nums[current]

//       if (!hasGreater) {
//         hasGreater = num > numK
//       } else if (!hasSmaller) {
//         hasSmaller = num < numK
//       }

//       current--
//     }

//     if (hasGreater && hasSmaller) {
//       return true
//     }
//   }

//   return false
// }

function find132pattern(nums: number[]): boolean {
  // console.log(nums)
  let min = Infinity
  const stack: [number, number][] = []

  for (const num of nums) {
    // console.log(num, stack)
    if (stack.some(pair => pair[0] < num && num < pair[1])) {
      return true
    }

    if (num < min) {
      min = num
      continue
    }

    if (num - min > 1) {
      while (stack.at(-1)?.[1] < num) {
        stack.pop()
      }

      stack.push([min, num])
    }
  }

  return false
}

console.log(find132pattern([1, 2, 3, 4]))
console.log(find132pattern([3, 1, 4, 2]))
console.log(find132pattern([-1, 3, 2, 0]))
console.log(find132pattern([-2, 1, 2, -2, 1, 2]))
console.log(find132pattern([0, -1000, 2000, -3000, 4000, -5000, 6000, -7000, 8000, -9000, 10000]))


