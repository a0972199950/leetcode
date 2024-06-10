// 287. Find the Duplicate Number

console.clear()

// function findDuplicate(nums: number[]): number {
//   let last: number | null = null

//   nums
//     .sort((a, b) => a - b)
//     .every((num) => {
//       if (last === null) {
//         last = num
//         return true
//       }

//       if (num === last) {
//         return false
//       }

//       last = num
//       return true
//     })

//   return last as unknown as number
// }

// function findDuplicate(nums: number[]): number {
//   const history = new Set()

//   for (const num of nums) {
//     if (history.has(num)) {
//       return num
//     }

//     history.add(num)
//   }

//   return -1
// }

function findDuplicate(nums: number[]): number {
  let slow = nums[0]
  let fast = nums[0]

  const increase = (steps: number, current: number) => {
    let result = current

    for (let i = 1; i <= steps; i++) {
      result = nums[result]
    }

    return result
  }

  do {
    slow = increase(1, slow)
    fast = increase(2, fast)
  } while (slow !== fast)

  console.log(slow, fast)

  let slow2 = nums[0]
  while (slow !== slow2) {
    slow = increase(1, slow)
    slow2 = increase(1, slow2)
  }

  console.log(slow, slow2)
  return slow
}

// console.log(findDuplicate([1, 3, 4, 2, 2]))
// console.log(findDuplicate([3, 1, 3, 4, 2]))
// console.log(findDuplicate([3, 3, 3, 3, 3]))
console.log(findDuplicate([1, 3, 5, 2, 2, 4, 6]))


