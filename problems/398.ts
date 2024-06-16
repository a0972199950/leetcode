// 398. Random Pick Index

export {}
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

console.log(solution.pick(3))
console.log(solution.pick(1))
console.log(solution.pick(3))


