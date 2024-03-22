// 400. Nth Digit

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
console.log(findNthDigit(100000000))

export {}
