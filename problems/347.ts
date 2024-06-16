// 347. Top K Frequent Elements

export {}
console.clear()

function topKFrequent(nums: number[], k: number): number[] {
  const record: Record<string, number> = {}

  for (const num of nums) {
    record[num] = ++record[num] || 1
  }

  return Object
    .entries(record)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(item => Number(item[0]))
}


