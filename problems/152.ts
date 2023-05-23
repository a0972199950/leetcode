// 152. Maximum Product Subarray

function maxProduct(nums: number[]): number {
  let max = -Infinity
  let cache = new Set<number>().add(1)

  for (const num of nums) {
    const newCache = new Set<number>().add(num)
    max = Math.max(max, num)

    cache.forEach(item => {
      const result = item * num
      console.log('oldMax: ', max, 'result: ', result)
      max = Math.max(max, result)
      console.log('max: ', max)
      newCache.add(result)
    })

    cache = newCache
  }

  console.log(...cache)
  console.log(max)

  return max
}

// maxProduct([2, 3, -2, 4])
// maxProduct([2, 3, 3, -2, 4, 9])
maxProduct([0, 5])
// maxProduct([-2, 0, -1])

export {}