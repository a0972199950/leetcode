// 15. 3Sum

console.clear()

// function threeSum(nums: number[]): number[][] {
//   nums = nums.sort((a, b) => a - b)
//   const result = []

//   const getNextLeft = (left) => {
//     let nextLeft = left

//     do {
//       nextLeft++
//     } while (nums[nextLeft] === nums[nextLeft - 1] && nextLeft < nums.length)

//     return nextLeft
//   }

//   const getNextRight = (right) => {
//     let nextRight = right

//     do {
//       nextRight--
//     } while (nums[nextRight] === nums[nextRight + 1] && nextRight >= 0)

//     return nextRight
//   }

//   let lastNum1 = null
//   for (let i = 0; i < nums.length - 2; i++) {
//     const num1 = nums[i]

//     if (lastNum1 === null) {
//       lastNum1 = num1
//     }
//     else if (lastNum1 === num1) {
//       continue
//     }
//     else {
//       lastNum1 = num1
//     }

//     let left = i + 1
//     let right = nums.length - 1

//     while (left < right) {
//       const num2 = nums[left]
//       const num3 = nums[right]
//       const sum = num1 + num2 + num3

//       if (sum === 0) {
//         result.push([num1, num2, num3])

//         left = getNextLeft(left)
//         right = getNextRight(right)
//       }
//       else if (sum > 0) {
//         right = getNextRight(right)
//       }
//       else if (sum < 0) {
//         left = getNextLeft(left)
//       }
//     }
//   }

//   return result
// }

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)

  const result = []

  const nextLeft = (left) => {
    do {
      left++
    } while (nums[left] === nums[left - 1] && left < nums.length)

    return left
  }

  const nextRight = (right) => {
    do {
      right--
    } while (nums[right] === nums[right + 1] && right >= 0)

    return right
  }

  for (let start = 0; start < nums.length; start++) {
    if (nums[start] === nums[start - 1]) continue

    let left = start + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[start] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[left], nums[start], nums[right]])
        
        left = nextLeft(left)
        right = nextRight(right)
      } else if (sum < 0) {
        left = nextLeft(left)
      } else {
        right = nextRight(right)
      }
    }
  }

  return result
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 1, 1]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([-2, 0, 0, 2, 2]))
console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([-1, -1, 0, 1]))


