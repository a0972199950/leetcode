// 992 Subarrays with K Different Integers. 

export {}
console.clear()

// TODO: [3/25] 沒解出來，待重寫
// Time: O(2n)
// Space: O(2n)
function subarraysWithKDistinct(nums: number[], k: number): number {
  const atMost = (nums: number[], k: number) => {
    // { number: count }
    const record = new Map()

    let left = 0
    let result = 0

    // 擴右
    for (let right = 0; right < nums.length; right++) {
      const rightNum = nums[right]
      record.set(rightNum, (record.get(rightNum) ?? 0) + 1)

      // while 不合法，縮左
      while (record.size > k) {
        const leftNum = nums[left]

        record.set(leftNum, record.get(leftNum) - 1)
        if (record.get(leftNum) === 0) {
          record.delete(leftNum)
        }

        left++
      }

      // console.log(nums.slice(left, right + 1))
      result += (right - left + 1)
    }

    // console.log(`atMost ${k}: `, result)
    return result
  }

  return atMost(nums, k) - atMost(nums, k - 1)
}

// console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 4)) // 3
