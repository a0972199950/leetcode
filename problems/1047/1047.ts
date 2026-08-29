// 1047. Remove All Adjacent Duplicates In String
// 最後練習時間：2026-03-18
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

console.clear()

function removeDuplicates(s: string): string {
  const stack: string[] = []

  for (const char of s) {
    if (stack.at(-1) === char) {
      stack.pop()
      continue
    }

    stack.push(char)

  }

  return stack.join('')
}

console.log(removeDuplicates('abbaca')) // ca
console.log(removeDuplicates('azxxzy')) // ay
