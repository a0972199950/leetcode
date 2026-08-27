// 202. Happy Number
// 最後練習時間：2022-10-19
// https://leetcode.com/problems/happy-number/

console.clear()

function isHappy(n: number): boolean {
  let strN = String(n).replace(/0/g, '')

  if (!n) {
    return false
  }

  const record = new Set<string>().add(strN)

  while (strN !== '1') {
    const nextN = String(strN.split('').reduce((sum, item) => sum + Math.pow(Number(item), 2), 0)).replace(/0/g, '')

    console.log('nextN: ', nextN)

    if (record.has(nextN)) {
      return false
    }

    record.add(nextN)
    strN = nextN

    console.log(record)
  }

  return true
}

console.log(isHappy(19)) // Expected: true
console.log(isHappy(2)) // Expected: false

// 
