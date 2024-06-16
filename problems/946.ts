// 946. Validate Stack Sequences

export {}
console.clear()

function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const temp = []
  let pushedIndex = 0
  let poppedIndex = 0

  const push = () => {
    if (pushedIndex < pushed.length) {
      temp.push(pushed[pushedIndex])
      pushedIndex++
      return true
    }
    
    return false
  }

  const pop = () => {
    if (poppedIndex < popped.length) {
      temp.pop()
      poppedIndex++
      return true
    }

    return false
  }

  while (true) {
    if (poppedIndex === popped.length && pushedIndex === pushed.length) {
      return true
    }
    else if (temp[temp.length - 1] === popped[poppedIndex]) {
      pop()
    }
    else if (pushedIndex < pushed.length) {
      push()
    }
    else {
      return false
    }
  }
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))


