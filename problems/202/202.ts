// 202. Happy Number
// 最後練習時間：2026-09-25
// https://leetcode.com/problems/happy-number/

console.clear()

// function isHappy(n: number): boolean {
//   let strN = String(n).replace(/0/g, '')

//   if (!n) {
//     return false
//   }

//   const record = new Set<string>().add(strN)

//   while (strN !== '1') {
//     const nextN = String(strN.split('').reduce((sum, item) => sum + Math.pow(Number(item), 2), 0)).replace(/0/g, '')

//     console.log('nextN: ', nextN)

//     if (record.has(nextN)) {
//       return false
//     }

//     record.add(nextN)
//     strN = nextN

//     console.log(record)
//   }

//   return true
// }

// Time: O(random)?
// Space: O(1)
function isHappy(n: number): boolean {
  let slow = n
  let fast = n

  const next = (num: number) => {
    return num
      .toString()
      .split('')
      .reduce((acc, str) => acc + Number(str)**2, 0)
  }

  while (fast !== 1) {
    slow = next(slow)
    fast = next(next(fast))

    // console.log([slow, fast])

    // 有環
    // slow, fast 最小可能都是1，不會是0或負數
    if (slow + fast !== 2 && slow === fast) {
      return false
    }
  }

  return true
}

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
console.log(isHappy(10)) // true

