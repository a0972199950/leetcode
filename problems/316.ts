// 316. Remove Duplicate Letters

console.clear()

function removeDuplicateLetters(s: string): string {
  const record: Record<string, number> = {}

  for (const char of s.split('')) {
    record[char] = ++record[char] || 1
  }

  const stack: string[] = []
  const has: Record<string, number> = {}

  for (const char of s.split('')) {
    console.log('Target: ', char)

    if (has[char]) {
      record[char]--
      console.log('result', stack)
      continue
    }

    let last = stack[stack.length - 1]

    while (
      record[last] >= 1 // char 並非 stack 的第一個，且 last char 在後面至少還有出現一次
      && char.charCodeAt(0) < last.charCodeAt(0) // char 的字典序比 last char 的字典序還前面
    ) {
      stack.pop()
      has[last]--
      last = stack[stack.length - 1]
      console.log('inside while', stack)
    }

    if (!has[char]) {
      stack.push(char)
      has[char] = ++has[char] || 1
    }
    
    record[char]--
    console.log('result', stack)
  }

  return stack.join('')
}

console.log(removeDuplicateLetters('bcabc'))
console.log(removeDuplicateLetters('cbacdcbc'))
console.log(removeDuplicateLetters('abacb'))


