// 13. Roman to Integer

console.clear()

function romanToInt(s: string): number {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let sum = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const nextChar = s[i + 1]

    const num = hash[nextChar] > hash[char] ? (0 - hash[char]) : hash[char]

    sum += num
  }

  return sum
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))


