// 131. Palindrome Partitioning

export {}
console.clear()

function partition(s: string): string[][] {
  const results = []
  const result = []

  const palindromes = new Set()
  const notPalindromes = new Set()

  const isPalindrome = (start: number, end: number) => {
    const str = s.slice(start, end + 1)

    if (palindromes.has(str)) {
      return true
    }

    if (notPalindromes.has(str)) {
      return false
    }

    while (end > start) {
      if (s[start] !== s[end]) {
        notPalindromes.add(str)
        return false
      }

      start++
      end--
    }

    palindromes.add(str)
    return true
  }

  const dfs = (start: number) => {
    if (start === s.length) {
      results.push([...result])
      return
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(start, i)) {
        result.push(s.slice(start, i + 1))
        dfs(i + 1)
        result.pop()
      }
    }
  }

  dfs(0)

  return results
}

// console.log(partition('aab'))
// console.log(partition('a'))
console.log(partition('abbacc'))


