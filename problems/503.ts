// 503. Next Greater Element II

console.clear()

function nextGreaterElements(nums: number[]): number[] {
  const stack: { val: number, index: number }[] = []
  const result = Array(nums.length).fill(-1)

  for (let index = 0; index < nums.length * 2; index++) {
    const num = nums[index % nums.length]

    while (num > stack.at(-1)?.val) {
      result[stack.pop().index] = num
    }

    if (index < nums.length) {
      stack.push({ val: num, index })
    }
  }

  return result
}

console.log(nextGreaterElements([1, 2, 1]))
console.log(nextGreaterElements([1, 2, 3, 4, 3]))
console.log(nextGreaterElements([1, 2]))
console.log(nextGreaterElements([1]))
console.log(nextGreaterElements([1, 1]))


