// 264. Ugly Number II

console.clear()

// function nthUglyNumber(n: number): number {
//   const primeFactors = [2, 3, 5]

//   const dp = [false, true]
//   const uglyNumbers = [1]
//   let currentNum = 2

//   while (uglyNumbers.length < n) {
//     const isUglyNumber = primeFactors.some(primeFactor => {
//       return dp[currentNum / primeFactor] === true
//     })

//     if (isUglyNumber) {
//       uglyNumbers.push(currentNum)
//     }

//     dp[currentNum] = isUglyNumber
//     currentNum++
//   }

//   console.log(uglyNumbers)
//   console.log(dp)

//   return uglyNumbers.at(-1)
// }

// function nthUglyNumber(n: number): number {
//   const primeFactors = [2, 3, 5]

//   const dp = [false, true]
//   const uglyNumbers = [1]
//   let currentNum = 2

//   while (uglyNumbers.length < n) {
//     const isUglyNumber = primeFactors.some(primeFactor => {
//       return dp[currentNum / primeFactor] === true
//     })

//     if (isUglyNumber) {
//       uglyNumbers.push(currentNum)
//     }

//     dp[currentNum] = isUglyNumber
//     currentNum++
//   }

//   // console.log(uglyNumbers)
//   // console.log(dp)

//   return uglyNumbers.at(-1)
// }

function nthUglyNumber(n: number): number {
  const uglyNumbers = [1]

  let index2 = 0
  let index3 = 0
  let index5 = 0

  while (uglyNumbers.length < n) {
    const next2 = uglyNumbers[index2] * 2
    const next3 = uglyNumbers[index3] * 3
    const next5 = uglyNumbers[index5] * 5

    const nextMin = Math.min(next2, next3, next5)
    uglyNumbers.push(nextMin)

    if (nextMin === next2) index2++
    if (nextMin === next3) index3++
    if (nextMin === next5) index5++
  }

  console.log(uglyNumbers)

  return uglyNumbers.at(-1)
}

// nthUglyNumber(10)
// nthUglyNumber(1)
nthUglyNumber(20)
// nthUglyNumber(351)


