// 1802. Maximum Value at a Given Index in a Bounded Array

console.clear()

function maxValue(n: number, index: number, maxSum: number): number {
  const findMinSum = (val: number) => {
    const leftSum = (Math.max(1, val - index) + val) * Math.min(val, index + 1) / 2 + ((index + 1 > val) ? index + 1 - val : 0)
    const rightSum = (Math.max(1, val - (n - index - 1)) + val) * Math.min(val, n - index) / 2 + ((n - index > val) ? n - index - val : 0)
    const minSum = leftSum + rightSum - val
    return minSum
  }

  let left = 1
  let right = maxSum

  while (right > left) {
    const middle = Math.ceil(left + (right - left) / 2)

    const minSum = findMinSum(middle)
    // console.log(i, minSum)

    if (minSum > maxSum) {
      right = middle - 1
    } else {
      left = middle
    }
  }

  return left
}

console.log(maxValue(4, 2, 6))
console.log(maxValue(6, 1, 10))
console.log(maxValue(3, 2, 18))
console.log(maxValue(1, 0, 24))
console.log(maxValue(4, 0, 4))
console.log(maxValue(1, 0, 444029221))


