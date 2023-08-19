console.clear()
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message')

function solution(nums: number[]): number {
  // Implement your solution here

  const record: Record<number, boolean> = {}

  for (const num of nums) {
    if (num < 1) {
      continue
    }
    record[num] = true
  }

  let result = 1
  while (true) {
    if (!record[result]) {
      return result
    }
    result++
  }
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))

export {}
