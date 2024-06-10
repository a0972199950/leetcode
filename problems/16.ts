// 16. 3Sum Closest

console.clear()

function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b)

  let closest = Infinity

  for_loop:
  for (let i = 0; i < nums.length; i++) {
    const val1 = nums[i]

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const val2 = nums[j]
      const val3 = nums[k]
      const sum = val1 + val2 + val3

      if (sum === target) {
        closest = sum
        break for_loop
      }

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum
      }

      if (sum < target) {
        j++
      } else {
        k--
      }
    }

  }

  return closest
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0], 1))
console.log(threeSumClosest([-1, 2, 1, -4], -1))

