// 400. Nth Digit
// 最後練習時間：2024-03-18
// https://leetcode.com/problems/nth-digit/

console.clear()

function findNthDigit(n: number): number {
  let str = ''
  let num = 1

  while (str.length < n) {
    str += num
    num++
  }

  return Number(str[n - 1])
}

// console.log(findNthDigit(3))
// console.log(findNthDigit(11))
console.log(findNthDigit(100000000)) // Expected: 8

