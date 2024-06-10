// 678. Valid Parenthesis String

console.clear()

function checkValidString(s: string): boolean {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(' || char === '*') {
      stack.push(char)
      continue
    }

    let lastLeft = null

    for (let j = stack.length - 1; j >= 0; j--) {
      if (stack[j] === '(') {
        lastLeft = j
        break
      }
    }

    if (lastLeft === null) {
      stack.push(char)
    } else {
      stack[lastLeft] = null
    }
  }

  console.log(stack)

  if (stack[0] === ')' || stack.at(-1) === '(') {
    return false
  }

  let open = 0
  let free = 0

  for (const char of stack) {
    if (char === null) {
      continue
    }

    if (char === '(') {
      open++
      continue
    }

    if (char === '*') {
      if (open > 0) {
        open--
        continue
      }

      free++
      continue
    }

    if (char === ')') {
      if (free > 0) {
        free--
        continue
      }

      return false
    }
  }

  return open === 0
}


console.log(checkValidString('()'))
console.log(checkValidString('(*)'))
console.log(checkValidString('(*))'))
console.log(checkValidString('(*)))'))


