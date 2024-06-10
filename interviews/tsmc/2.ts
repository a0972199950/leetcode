// tsmc. 2

console.clear()

function countSubstrings(input_str: string): number {
  const getMapped = (char: string) => {
    if (char === 'a' || char === 'b') {
      return 1
    }
  
    const code = char.charCodeAt(0) - 'a'.charCodeAt(0) - 1
    const divide = Math.floor(code / 3)
    const rest = code % 3
  
    if (rest === 0) {
      return divide + 1
    } else {
      return divide + 1 + 1
    }
  }

  const prefixSums: number[] = []

  for (let i = 0; i < input_str.length; i++) {
    prefixSums[i] = (prefixSums[i - 1] || 0) + getMapped(input_str[i])
  }

  let canDivided = 0

  for (let i = 0; i < input_str.length; i++) {
    for (let j = i; j < input_str.length; j++) {
      const sum = prefixSums[j] - (prefixSums[i - 1] || 0)
      const length = j - i + 1
      
      if (sum % length === 0) {
        canDivided++
      }
    }
  }

  return canDivided
}

// function countSubstrings(input_str: string): number {
//   const sumCache: Record<string, number> = {}

//   const getMapped = (char: string) => {
//     if (char === 'a' || char === 'b') {
//       return 1
//     }
  
//     const code = char.charCodeAt(0) - 'a'.charCodeAt(0) - 1
//     const divide = Math.floor(code / 3)
//     const rest = code % 3
  
//     if (rest === 0) {
//       return divide + 1
//     } else {
//       return divide + 1 + 1
//     }
//   }

//   const getSum = (str: string) => {
//     return str.split('').reduce((last, char) => {
//       const s = sumCache[char]
//         ? sumCache[char]
//         : getMapped(char)

//       return last + s
//     }, 0)
//   }

//   let canDivided = 0

//   for (let i = 0; i < input_str.length; i++) {
//     for (let j = i; j < input_str.length; j++) {
//       const str = input_str.slice(i, j + 1)

//       let sum: number
//       const length = str.length

//       if (sumCache[str]) {
//         sum = sumCache[str]
//       } else {
//         sum = sumCache[str] = getSum(str)
//       }

//       if (sum % length === 0) {
//         canDivided++
//       }

//       // console.log(sumCache)
//     }
//   }

//   return canDivided
// }

console.log(countSubstrings('asdf')) // 6
console.log(countSubstrings('bdh')) // 4

// console.log(countSubstrings('aaaaaaaaaa')) // 4


