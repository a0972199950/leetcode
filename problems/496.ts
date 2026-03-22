// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

export {}
console.clear()

// Time: O(n + m)
// Space: O(n)
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const decreasingStack: number[] = [] // number is value itself, 同時也能當作 index 紀錄
  const record = []

  for (const num of nums2) {
    // pop stack and make record
    while (decreasingStack.length && num > decreasingStack.at(-1)) {
      const index = decreasingStack.pop()
      record[index] = num
    }

    decreasingStack.push(num)
  }

  for (const index of decreasingStack) {
    record[index] = -1
  }

  return nums1.map((num) => {
    return record[num]
  })
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
