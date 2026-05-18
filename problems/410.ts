// 410. Split Array Largest Sum

export {}
console.clear()

function splitArray(nums: number[], k: number): number {

  const isAnswer = (sum: number): boolean => {
    let start = 0
    let end = 0
    let current = nums[0]

    while (start < nums.length && end < nums.length) {
      if (current === sum) {
        console.log([start, end], current)
        // console.log('if 1')
        const leftCount = start
        const rightCount = nums.length - 1 - end

        let min = 1
        if (leftCount) min++
        if (rightCount) min++

        const max = 1 + leftCount + rightCount
        
        if (min <= k && k <= max) {
          return true
        }

        end++
        current += nums[end]
      } else if (current < sum) {
        // console.log('if 2')
        end++
        current += nums[end]
      } else {
        // console.log('if 3')
        current -= nums[start]
        start++
      }
    }

    return false
  }

  // console.log(isAnswer(7))
  // return

  let left = -Infinity // max(nums)
  let right = 0 // sum(nums)

  for (const num of nums) {
    left = Math.max(left, num)
    right += num
  }

  for (let i = right; i >= left; i--) {
    console.log('i: ', i)

    if (isAnswer(i)) {
      return i
    }
  }
}

// console.log(splitArray([1, 1, 1, 1, 1, 1, 1], 1))
console.log(splitArray([7, 2, 5, 10, 8], 2))
