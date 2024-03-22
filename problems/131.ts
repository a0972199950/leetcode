// 131. Palindrome Partitioning

console.clear()

function partition(s: string): string[][] {
  const isPalindromeRecord = new Set()
  const isNotPalindromeRecord = new Set()

  const isPalindrome = (str: string) => {
    if (isNotPalindromeRecord.has(str)) {
      return true
    }

    if (isNotPalindromeRecord.has(str)) {
      return false
    }

    let isPalindrome = true

    for (let start = 0; start < str.length / 2; start++) {
      const end = str.length - start - 1
      if (str[start] !== str[end]) {
        isPalindrome = false
        break
      }
    }

    if (isPalindrome) {
      isPalindromeRecord.add(str)
    } else {
      isNotPalindromeRecord.add(str)
    }

    return isPalindrome
  }

  const ans = []

  const treverse = (palindromes: string[], remain: string) => {
    if (!remain) {
      ans.push(palindromes)
      return
    }

    if (isPalindrome(remain)) {
      ans.push([...palindromes, remain])
    }

    treverse([...palindromes, remain[0]], remain.slice(1))
  }

  for (let i = 0; i < s.length; i++) {
    treverse([], s)
  }

  return ans
}

console.log(partition('aab'))
// console.log(partition('a'))

export {}
