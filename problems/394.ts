// 394. Decode String

function decodeString(s: string): string {
  const stack: string[] = []

  for (const char of s) {
    if (char !== ']') {
      stack.push(char)
      continue
    }

    let repeatTarget = ''

    while (stack[stack.length - 1] !== '[') {
      repeatTarget = stack.pop() + repeatTarget
    }

    stack.pop()

    let repeat = ''

    while (/\d/.test(stack[stack.length - 1])) {
      repeat = stack.pop() + repeat
    }

    stack.push(Array.from(Array(parseInt(repeat))).reduce((sum) => sum += repeatTarget, ''))
  }

  return stack.join('')
};

console.log(decodeString('10[hi]'))


export {}