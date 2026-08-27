// 398. Random Pick Index
// 最後練習時間：2024-04-26
// https://leetcode.com/problems/random-pick-index/

console.clear()

class Solution {
  data = {}

  constructor(nums: number[]) {
    const data = {}

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]

      if (!data[num]) {
        data[num] = []
      }

      data[num].push(i)
    }

    this.data = data
  }

  pick(target: number): number {
    if (!this.data[target]) {
      return -1
    }

    const options = this.data[target]
    const random = Math.floor(Math.random() * options.length)
    return options[random]
  }
}

const solution = new Solution([1, 2, 3, 3, 3])

console.log(solution.pick(3)) // Expected: 4
console.log(solution.pick(1)) // Expected: 0
console.log(solution.pick(3)) // Expected: 3

