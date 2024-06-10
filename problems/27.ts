// 27. Remove Element

console.clear()

function removeElement(nums: number[], val: number): number {
  nums = nums.sort()

  let startIndex = null
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (startIndex === null) {
        continue
      } else {
        break
      }
      
    }

    if (startIndex === null) {
      startIndex = i
    }

    count++
  }

  nums.splice(startIndex, count)

  console.log(nums)
  return nums.length
}

// removeElement([3, 2, 2, 3], 3)
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)


