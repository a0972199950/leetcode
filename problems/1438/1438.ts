// 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// 最後練習時間：2026-09-13
// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

console.clear()

// Time: amortized O(n)
// Space: O(n)
function longestSubarray(nums: number[], limit: number): number {
  const increaseQueue: { val: number, index: number }[] = []
  const decreaseQueue: { val: number, index: number }[] = []

  let increaseQueueHead = 0
  let decreaseQueueHead = 0

  let maxSize = 0

  let left = 0

  for (let right = 0; right < nums.length; right++) {
    const rightNum = nums[right]

    // update increaseQueue with right
    while (increaseQueue.length && increaseQueue.at(-1).val > rightNum) {
      increaseQueue.pop()
    }

    if (increaseQueue.length < increaseQueueHead) {
      increaseQueueHead = increaseQueue.length
    }

    increaseQueue.push({ val: rightNum, index: right })

    // update decreaseQueue with right
    while (decreaseQueue.length && decreaseQueue.at(-1).val < rightNum) {
      decreaseQueue.pop()
    }

    if (decreaseQueue.length < decreaseQueueHead) {
      decreaseQueueHead = decreaseQueue.length
    }

    decreaseQueue.push({ val: rightNum, index: right })

    while (decreaseQueue[decreaseQueueHead].val - increaseQueue[increaseQueueHead].val > limit) {
      // shift increaseQueue with left (optional)
      if (left === increaseQueue[increaseQueueHead].index) {
        increaseQueueHead++
      }

      // shift decreaseQueue with left (optional)
      if (left === decreaseQueue[decreaseQueueHead].index) {
        decreaseQueueHead++
      }

      // left++
      left++
    }

    // update maxSize
    maxSize = Math.max(maxSize, right - left + 1)
  }

  return maxSize
}

console.log(longestSubarray([8, 2, 4, 7], 4)) // 2
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5)) // 4
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)) // 3
console.log(longestSubarray([1, 5, 6, 7, 8, 10, 6, 5, 6], 4)) // 5
