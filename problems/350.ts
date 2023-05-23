// 350. Intersection of Two Arrays II

function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length === 0 || nums2.length === 0) {
    return []
  }

  const nums = {
    short: nums1.length <= nums2.length ? nums1 : nums2,
    long: nums2.length >= nums1.length ? nums2 : nums1,
  }

  const result: number[] = []

  for (let i = 0; i < nums.short.length; i++) {
    const target = nums.short[i]

    for (let j = 0; j < nums.long.length; j++) {
      const current = nums.long[j]

      if (target === current) {
        result.push(target)
        nums.long.splice(j, 1)
        break
      }
    }
  }

  console.log(nums.long)

  return result
};

console.log(intersect(
  [1,2,2,1],
  [2,2]
))

export {}