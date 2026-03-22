// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

export {}
console.clear()

// space On, time On
// function findDisappearedNumbers(nums: number[]): number[] {
//   const result = []
//   const set = new Set()

//   for (const num of nums) {
//     set.add(num)
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const shouldBe = i + 1
//     if (!set.has(shouldBe)) {
//       result.push(shouldBe)
//     }
//   }

//   return result
// }

// space O1, time On
// function findDisappearedNumbers(nums: number[]): number[] {
//   const result = []

//   for (const num of nums) {
//     const index = Math.abs(num) - 1

//     if (nums[index] < 0) {
//       continue
//     }

//     nums[index] = 0 - nums[index]
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const shouldBe = i + 1

//     if (nums[i] > 0) {
//       result.push(shouldBe)
//     }
//   }

//   return result
// }

// time: O(2n), space: O(1)
function findDisappearedNumbers(nums: number[]): number[] {
  // array 長度與陣列中最大數字相同，因此夠用
  const result = []

  for (const num of nums) {
    const index = Math.abs(num) - 1

    if (nums[index] < 0) {
      continue
    }

    nums[index] = 0 - nums[index]
  }

  for (let i = 0; i < nums.length; i++) {
    const num = i + 1

    if (nums[i] > 0) {
      result.push(num)
    }
  }

  return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))
