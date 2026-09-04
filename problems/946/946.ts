// 946. Validate Stack Sequences
// 最後練習時間：2026-09-04
// https://leetcode.com/problems/validate-stack-sequences/

console.clear()

// function validateStackSequences(pushed: number[], popped: number[]): boolean {
//   const temp = []
//   let pushedIndex = 0
//   let poppedIndex = 0

//   const push = () => {
//     if (pushedIndex < pushed.length) {
//       temp.push(pushed[pushedIndex])
//       pushedIndex++
//       return true
//     }
    
//     return false
//   }

//   const pop = () => {
//     if (poppedIndex < popped.length) {
//       temp.pop()
//       poppedIndex++
//       return true
//     }

//     return false
//   }

//   while (true) {
//     if (poppedIndex === popped.length && pushedIndex === pushed.length) {
//       return true
//     }
//     else if (temp[temp.length - 1] === popped[poppedIndex]) {
//       pop()
//     }
//     else if (pushedIndex < pushed.length) {
//       push()
//     }
//     else {
//       return false
//     }
//   }
// }

// Time: O(n)
// Space: O(n)
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = []
  let popIndex = 0

  for (const num of pushed) {
    stack.push(num)

    while (popIndex < popped.length
      && stack.length
      && popped[popIndex] === stack.at(-1)
    ) {
      stack.pop()
      popIndex++
    }
  }

  // console.log(popIndex, stack)

  return !stack.length
}

// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])) // false
// console.log(validateStackSequences([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])) // true（全推再全 pop）
// console.log(validateStackSequences([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])) // true（推一個馬上 pop）
// console.log(validateStackSequences([1], [1]))                          // true（單一元素）
// console.log(validateStackSequences([1, 2], [2, 1]))                    // true
// console.log(validateStackSequences([1, 2], [1, 2]))                    // true
console.log(validateStackSequences([1, 2, 3], [3, 1, 2]))              // false（pop 3 後頂端是 2，無法先 pop 1）

