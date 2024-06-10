function isValid(s: string): boolean {
  const closeBracketMap: any = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const openBrackets = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (!closeBracketMap.hasOwnProperty(char)) {
      openBrackets.push(char)
      continue
    } else {
      if (openBrackets[openBrackets.length - 1] !== closeBracketMap[char]) {
        return false
      }

      openBrackets.pop()
    }
  }


  return openBrackets.length === 0
}

console.log('result: ', isValid('([)]'))


