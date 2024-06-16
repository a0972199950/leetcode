// 34. Find First and Last Position of Element in Sorted Array

export {}
console.clear()

function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1
  let middle = null

  while (right > left) {
    const _middle = Math.floor(left + (right - left) / 2)

    if (nums[_middle] === target) {
      middle = _middle
      break
    } else if (nums[_middle] > target) {
      right = _middle - 1
    } else {
      left = _middle + 1
    }
  }

  console.log(left, middle, right)

  if (middle === null) {
    if (nums[left] !== target && nums[right] !== target) {
      return [-1, -1]
    } else {
      middle = nums[left] === target ? left : right
    }
  }

  left = middle
  right = middle

  while (nums[left] === target || nums[right] === target) {
    (nums[left] === target) && (left--)
    ;(nums[right] === target) && (right++)
  }

  return [left + 1, right - 1]
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
// console.log(searchRange([], 0))
console.log(searchRange([1, 2, 3], 2))


