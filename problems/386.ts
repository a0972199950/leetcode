// 386. Lexicographical Numbers

console.clear()

// function lexicalOrder(n: number): number[] {
//   const arr = Array.from({ length: n }).map((_, index) => index + 1)
  
//   arr.sort((a, b) => {
//     const strA = String(a)
//     const strB = String(b)

//     let index = 0
//     while (index < strA.length && index < strB.length) {
//       if (Number(strA[index]) < Number(strB[index])) {
//         return -1
//       }
//       else if (Number(strA[index]) > Number(strB[index])) {
//         return 1
//       }
//       else {
//         index++
//       }
//     }

//     if (strA[index]) {
//       return 1
//     } else {
//       return -1
//     }
//   })

//   return arr
// }

function lexicalOrder(n: number): number[] {
  let current = null

  const result = Array.from({ length: n }).map(() => {
    if (current === null) {
      current = 1
      return current
    }

    if (current * 10 <= n) {
      current *= 10
      return current
    }

    if (current + 1 <= n && current % 10 !== 9) {
      current++
      return current
    }

    if (current === n) {
      current = Math.floor(current / 10)
    }

    while(current % 10 === 9) {
      current = Math.floor(current / 10)
    }

    current++
    return current
  })
  
  return result
}

// console.log(lexicalOrder(13))
// console.log(lexicalOrder(20))
// console.log(lexicalOrder(10))
console.log(lexicalOrder(34))


