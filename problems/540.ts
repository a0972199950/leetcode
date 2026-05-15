// 540. Single Element in a Sorted Array

export {}
console.clear()

// Time: O(logN)
// Space: O(1)
function singleNonDuplicate(nums: number[]): number {
  // 所有数字都出现两次的话，第一次的 index 一定是偶数，第二次一定是奇数。直到有一个数字指出现一次，这个规则才会被破坏

  let left = 0
  let right = nums.length - 1

  while (left !== right) {
    const middle = Math.floor(left + ((right - left) / 2))
    // console.log(left, right, middle, nums[middle])

    let shouldBeSameAsMiddle

    // middle 是奇数还是偶数
    if (middle % 2 !== 0) {
      // 奇數，则一样的数字应该出现在左边
      shouldBeSameAsMiddle = middle - 1
    } else {
      // 偶數，則一樣的數字應該出現在右邊
      shouldBeSameAsMiddle = middle + 1
    }

    if (nums[middle] === nums[shouldBeSameAsMiddle]) {
      // 代表左半邊完全符合每個數字都出現兩次，檢查右半邊
      left = middle + 1
    } else {
      // 代表左半邊存在只出現一次的數字
      right = middle
    }

  }

  return nums[left]
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]))
// console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4]))
// console.log(singleNonDuplicate([1, 2, 2, 3, 3, 4, 4]))
console.log(singleNonDuplicate([2]))
