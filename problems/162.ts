// 162. Find Peak Element

export {}
console.clear()

function findPeakElement(nums: number[]): number {
  let min = 0
  let max = nums.length - 1
  let middle

  while (max - min > 1) {
    middle = Math.floor(min + (max - min) / 2)

    const left = middle - 1 < 0 ? -Infinity : nums[middle - 1]
    const num = nums[middle]
    const right = middle + 1 >= nums.length ? -Infinity : nums[middle + 1]

    if (num > right && num > left) {
      return middle
    }

    if (right > num) {
      min = middle + 1
    } else if (left > num) {
      max = middle
    }
  }

  if (nums[max] > nums[min]) {
    return max
  } else {
    return min
  }
}

console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
console.log(findPeakElement([5, 4, 3, 4, 5]))


