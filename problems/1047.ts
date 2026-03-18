// 1047. Remove All Adjacent Duplicates In String

export {}
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

console.log(removeDuplicates('abbaca'))
console.log(removeDuplicates('azxxzy'))
