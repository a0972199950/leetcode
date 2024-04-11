// 556. Next Greater Element III

console.clear()

function nextGreaterElement(n: number): number {
  let result = String(n)
  const chars: string[] = []

  for (let i = result.length - 1; i >= 0; i--) {
    // console.log(chars)
    const char = result[i]
    const greaters = chars.filter(item => Number(item) > Number(char))

    if (!greaters.length) {
      chars.push(char)
      continue
    }

    const min = String(Math.min(...greaters.map(item => Number(item))))
    const index = chars.findIndex(char => char === min)
    chars.splice(index, 1, char)

    result = result.slice(0, i) + min + chars.sort((a, b) => Number(a) - Number(b)).join('')
    return Number(result) >= Math.pow(2, 31) ? -1 : Number(result)
  }

  return -1
}

// console.log(nextGreaterElement(12))
// console.log(nextGreaterElement(21))
// console.log(nextGreaterElement(713344321))
// console.log(nextGreaterElement(2147483486))
console.log(nextGreaterElement(2147483476))

export {}
