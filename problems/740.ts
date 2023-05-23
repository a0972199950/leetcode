// 740. Delete and Earn

console.clear()

// interface Item {
//   val: number
//   blocks: Record<number, boolean>
// }

// interface Node {
//   take: Item
//   notTake: Item
//   max: Item
// }

// function deleteAndEarn(nums: number[]): number {
//   nums = nums.sort((a, b) => b - a)

//   console.log(nums)

//   let prev: Node = {
//     take: {
//       val: nums[0],
//       blocks: {
//         [nums[0] - 1]: true,
//         [nums[0] + 1]: true
//       }
//     },
//     notTake: {
//       val: 0,
//       blocks: {}
//     },
//     max: {
//       val: nums[0],
//       blocks: {
//         [nums[0] - 1]: true,
//         [nums[0] + 1]: true
//       }
//     }
//   }

//   for (let i = 1; i < nums.length; i++) {
//     const val = nums[i]

//     const notTake: Item = { ...prev.max }
//     const take: Item = { ...notTake }

//     if (!prev.max.blocks[val]) {
//       take.val = val + prev.max.val
//       take.blocks = {
//         ...prev.max.blocks,
//         [val - 1]: true,
//         [val + 1]: true
//       }
//     }
//     else if (!prev.take.blocks[val]) {
//       take.val = val + prev.take.val
//       take.blocks = {
//         ...prev.take.blocks,
//         [val - 1]: true,
//         [val + 1]: true
//       }
//     }
//     else if (!prev.notTake.blocks[val]) {
//       take.val = val + prev.notTake.val
//       take.blocks = {
//         ...prev.notTake.blocks,
//         [val - 1]: true,
//         [val + 1]: true
//       }
//     }

//     const max: Item = take.val > notTake.val ? { ...take } : { ...notTake }

//     prev = { take, notTake, max }

//     console.log(val, prev)
//   }

//   console.log(prev)

//   return prev.max.val
// }

function deleteAndEarn(nums: number[]): number {
  const arr = []

  nums.forEach(num => {
    arr[num] = (arr[num] || 0) + num
  })

  console.log(arr)

  const max = []

  let lastIndex = null

  arr.forEach((val, index) => {
    console.log(index)
    if (index - 1 > lastIndex) {
      max.push((max.at(-1) || 0) + val)
    } else {
      max.push(Math.max(
        (max.at(-1) || 0),
        val + (max.at(-2) || 0)
      ))
    }

    lastIndex = index
  })

  console.log(max)

  return max.at(-1)
}

// deleteAndEarn([3, 4, 2])
// deleteAndEarn([2, 2, 3, 3, 3, 4])
// deleteAndEarn([1])
// deleteAndEarn([10, 9, 9, 9, 9, 9])
// deleteAndEarn([1, 8, 5, 9, 6, 9, 4, 1, 7, 3, 3, 6, 3, 3, 8, 2, 6, 3, 2, 2, 1, 2, 9, 8, 7, 1, 1, 10, 6, 7, 3, 9, 6, 10, 5, 4, 10, 1, 6, 7, 4, 7, 4, 1, 9, 5, 1, 5, 7, 5])
deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6])


export {}