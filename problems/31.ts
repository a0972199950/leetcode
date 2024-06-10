// 31. Next Permutation

console.clear()

function nextPermutation(nums: number[]): void {
  const hash: Record<number, number> = {} // { num: firstIndex }

  const bubbleSort = (start = 0) => {
    for (let end = nums.length - 1; end >= 1; end--) {
      let current = start

      while (current < end) {
        if (nums[current] > nums[current + 1]) {
          [nums[current], nums[current + 1]] = [nums[current + 1], nums[current]]
        }

        current++
      }
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]

    if (i + 1 >= nums.length || num >= nums[i + 1]) {
      if (!hash[num]) {
        hash[num] = i
      }
      continue
    }

    const swapNum = Object
      .keys(hash)
      .reduce((min, item) => {
        if (Number(item) <= num) {
          return min
        } else {
          return Math.min(min, Number(item))
        }
      }, Infinity)

    const swapIndex = hash[swapNum];
    [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]]
    bubbleSort(i + 1)
    return
  }

  nums.reverse()
}

nextPermutation([1, 2, 3])
nextPermutation([3, 2, 1])
nextPermutation([1, 1, 5])
nextPermutation([1, 3, 2])
nextPermutation([1, 1])


