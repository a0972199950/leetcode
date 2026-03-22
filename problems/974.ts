// 974. Subarray Sums Divisible by K. 
// https://leetcode.com/problems/subarray-sums-divisible-by-k/

export {}
console.clear()

// Time: O(n^2)
// Time: O(n)
function subarraysDivByK(nums: number[], k: number): number {
  const prefixMap: Record<number, number> = {/** sum *//** count */ }
  prefixMap[0] = 1

  let result = 0
  let sum = 0
  for (const num of nums) {
    sum += num

    // console.log(sum, prefixMap)

    Object.entries(prefixMap).forEach(([prefix, count]) => {
      if ((sum - Number(prefix)) % k === 0) {
        result += count
      }
    })

    prefixMap[sum] = (prefixMap[sum] ?? 0) + 1
    
  }

  return result
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
console.log(subarraysDivByK([5], 9))
