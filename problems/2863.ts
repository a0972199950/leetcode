// 2863. Maximum Length of Semi-Decreasing Subarrays

export {}
console.clear()

function maxSubarrayLength(nums: number[]): number {
  const stack = [{
    num: nums[0],
    index: 0
  }]

  let maxNum = nums[0]
  let maxLength = 0

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]

    if (num > maxNum) {
      maxNum = num
      stack.push({ num, index: i })
      continue
    }

    let maxIndex = stack.length - 1
    let minIndex = 0
    let middleIndex

    do {
      middleIndex = Math.ceil(minIndex + (maxIndex - minIndex) / 2)

      if (stack[middleIndex].num > num) {
        maxIndex = middleIndex
      } else {
        minIndex = middleIndex + 1
      }
    } while (maxIndex - minIndex > 1)

    if (minIndex > maxIndex) {
      continue
    }

    middleIndex = stack[minIndex]?.num > num ? minIndex : maxIndex

    if (middleIndex < stack.length) {
      maxLength = Math.max(maxLength, i - stack[middleIndex].index + 1)
    }
  }

  return maxLength
}

console.log(maxSubarrayLength([7, 6, 5, 4, 3, 2, 1, 6, 10, 11]))
console.log(maxSubarrayLength([57, 55, 50, 60, 61, 58, 63, 59, 64, 60, 63]))
console.log(maxSubarrayLength([1, 2, 3, 4]))
console.log(maxSubarrayLength([4, 3, 2, 1]))
console.log(maxSubarrayLength([4, 4, 4, 4]))
console.log(maxSubarrayLength([1, 2, 3, 4, 5, 4, 3, 2, 1]))
console.log(maxSubarrayLength([26, 26, 35, 72, 82]))


