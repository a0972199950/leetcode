// 2089. Find Target Indices After Sorting Array

console.clear()

// function targetIndices(nums: number[], target: number): number[] {
//   nums = nums.sort((a, b) => a - b)

//   console.log(nums)
  
//   let max = nums.length - 1
//   let min = 0
//   let middle

//   do {
//     middle = Math.ceil(min + (max - min) / 2)

//     if (nums[middle] > target) {
//       max = middle
//     } else if (nums[middle] < target) {
//       min = middle + 1
//     } else {
//       break
//     }
//   }
//   while (max - min > 1)

//   if (nums[middle] !== target) {
//     middle = nums[min] === target ? min : max
//   }
  
//   // console.log('middle: ', middle, 'min: ', min, 'max: ', max)

//   const result = []

//   if (nums[middle] !== target) {
//     return []
//   }

//   result.push(middle)

//   let left = middle - 1
//   let right = middle + 1

//   while (nums[left] === target || nums[right] === target) {
//     if (result[0] !== left && nums[left] === target) {
//       result.unshift(left)
//     }

//     if (result.at(-1) !== right && nums[right] === target) {
//       result.push(right)
//     }

//     left--
//     right++
//   }

//   return result
// }

function targetIndices(nums: number[], target: number): number[] {
  nums = nums.sort((a, b) => a - b)

  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      continue
    } else if (nums[i] === target) {
      result.push(i)
    } else {
      break
    }
  }

  return result
}

// console.log(targetIndices([1, 2, 5, 2, 3], 2))
// console.log(targetIndices([1, 2, 5, 2, 3], 3))
// console.log(targetIndices([1, 2, 5, 2, 3], 5))
console.log(targetIndices([1, 2, 5, 2, 3], 4))

export {}
