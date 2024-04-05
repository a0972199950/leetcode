// 163. Missing Ranges

console.clear()

function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
  let open = lower
  const ans = []

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (num > upper) {
      break
    }
  
    if (num < lower) {
      continue
    }

    if (open !== null && num - 1 >= lower) {
      ans.push([open, num - 1])
      open = null
    }

    if (num === open) {
      open = null
    }

    if (nums[i + 1] !== num + 1 && num + 1 <= upper) {
      open = Math.max(lower, num + 1)
    }
  }

  if (open !== null) {
    ans.push([open, upper])
    open = null
  }

  return ans
}

// function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
//   const hash = new Set()

//   for (const num of nums) {
//     hash.add(num)
//   }

//   let arr = []
//   const ans = []

//   for (let i = lower; i <= upper; i++) {
//     if (!hash.has(i)) {
//       if (arr.length > 1) {
//         arr.pop()
//       }

//       arr.push(i)
//     } else {
//       if (arr.length) {
//         ans.push([arr[0], arr[arr.length - 1]])
//       }

//       arr = []
//     }
//   }

//   if (arr.length) {
//     ans.push([arr[0], arr[arr.length - 1]])
//   }

//   return ans
// }

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99))
console.log(findMissingRanges([-3, -1, 0, 1, 3, 50, 75, 98, 102], 0, 99))
console.log(findMissingRanges([-1], -1, -1))
console.log(findMissingRanges([], 1, 1))
console.log(findMissingRanges([1, 3], 50, 99))
console.log(findMissingRanges([104, 109], 50, 99))

export {}
