// 2217. Find Palindrome With Fixed Length

export {}
console.clear()

function kthPalindrome(queries: number[], intLength: number): number[] {
  const getTenPow = (num: number) => {
    let i = 1

    while (num / Math.pow(10, i) > 10) {
      i++
    }

    return i--
  }

  for (const query of queries) {
    // 以10取對數
    const tens = getTenPow(query)
    const remain = query / Math.pow(10, tens)
    console.log(tens, remain)
  }

  return []
}

console.log(kthPalindrome([89], 1))


