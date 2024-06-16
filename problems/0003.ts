// 0003. 

export {}
console.clear()

const breakLine = (s: string) => {
  const result = []

  let lastBlankPosition = 0
  let count = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    

    if (char === ' ') {
      lastBlankPosition = i
    }

    if (count >= 60) {
      result[lastBlankPosition] = '\n'
      count = 0
    }

    result.push(char)
    count++
  }

  return result.join('')
}

const input = 'Use JavaScript to implement a "text processor" program that can be used to query information of input text and can also perform text replacement, and line breaks. Step1: Based on OOP, design a text processor that supports: 1. Counting number of words. 2. Counting non-space characters.'

console.log(breakLine(input))

