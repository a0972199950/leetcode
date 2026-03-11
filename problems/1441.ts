// 1441. Build an Array With Stack Operations

export {}
console.clear()

// time: O(n), space: O(n)
function buildArray(target: number[], n: number): string[] {
  let targetPointer = 0
  let stream = 1
  const stack: number[] = []

  const operations: ('Push' | 'Pop')[] = []

  const push = (num: number) => {
    operations.push('Push')
    stack.push(num)
  }

  const pop = () => {
    operations.push('Pop')
    stack.pop()
  }

  while (targetPointer <= target.length && stream <= n) {
    if (stream === target[targetPointer]) {
      push(stream)
      targetPointer++
      stream++
    } else {
      push(stream)
      pop()
      stream++
    }

    if (stack.at(-1) === target.at(-1)) {
      break
    }
  }

  return operations
}

console.log(buildArray([1, 3], 3))
console.log(buildArray([1, 2, 3], 3))
console.log(buildArray([1, 2], 4))
