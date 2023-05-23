// 15. 3Sum

console.clear()

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const result = []

  const getNextLeft = (left) => {
    let nextLeft = left

    do {
      nextLeft++
    } while (nums[nextLeft] === nums[nextLeft - 1] && nextLeft < nums.length)

    return nextLeft
  }

  const getNextRight = (right) => {
    let nextRight = right

    do {
      nextRight--
    } while (nums[nextRight] === nums[nextRight + 1] && nextRight >= 0)

    return nextRight
  }

  let lastNum1 = null
  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i]

    if (lastNum1 === null) {
      lastNum1 = num1
    }
    else if (lastNum1 === num1) {
      continue
    }
    else {
      lastNum1 = num1
    }

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const num2 = nums[left]
      const num3 = nums[right]
      const sum = num1 + num2 + num3

      if (sum === 0) {
        result.push([num1, num2, num3])

        left = getNextLeft(left)
        right = getNextRight(right)
      }
      else if (sum > 0) {
        right = getNextRight(right)
      }
      else if (sum < 0) {
        left = getNextLeft(left)
      }
    }
  }

  console.log(result)

  return result
}


threeSum([-1, 0, 1, 2, -1, -4])
threeSum([0, 1, 1])
threeSum([0, 0, 0])
threeSum([-2, 0, 0, 2, 2])

export {}
