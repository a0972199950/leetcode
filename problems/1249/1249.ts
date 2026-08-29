// 1249. Minimum Remove to Make Valid Parentheses
// 最後練習時間：2022-11-09
// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

console.clear()

function minRemoveToMakeValid(s: string): string {
  const leftSignIndexes = []
  const rightSignIndexes = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(') {
      leftSignIndexes.push(i)
    }
    else if (char === ')') {
      if (leftSignIndexes.length) {
        leftSignIndexes.pop()
      } else {
        rightSignIndexes.push(i)
      }
    }
  }

  const removeIndexes = [...leftSignIndexes, ...rightSignIndexes].sort((a, b) => b - a)

  for (const removeIndex of removeIndexes) {
    s = s.substring(0, removeIndex) + s.substring(removeIndex + 1)
  }

  return s
}

console.log(minRemoveToMakeValid('lee(t(c)o)de)')) // lee(t(c)o)de
console.log(minRemoveToMakeValid('lee(t(c)o(de)')) // leet(c)o(de)
console.log(minRemoveToMakeValid('leet(c)ode)')) // leet(c)ode
console.log(minRemoveToMakeValid('a)b(c)d')) // ab(c)d
console.log(minRemoveToMakeValid('))((')) // 
console.log(minRemoveToMakeValid('))abc((')) // abc
console.log(minRemoveToMakeValid('()')) // ()
console.log(minRemoveToMakeValid('((()((')) // ()

