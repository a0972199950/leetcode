// 402. Remove K Digits

console.clear()

// function removeKdigits(s: string, k: number): string {
//   const stack = []

//   let i = 0
//   let unit = 0
//   let remain = k

//   while (i < s.length) {
//     console.log('i: ', i, 'remain: ', remain, 'stack: ', stack)

//     if (!remain) {
//       stack.push(s[i])
//       i++
//       continue
//     }

//     if (remain === s.length - i) {
//       break
//     }

//     let j = i
//     let insert = i
//     while (j - i <= remain) {
//       console.log('j: ', j)
//       const num = s[j]

//       if (!stack[unit]) {
//         stack.push(num)
//         j++
//         continue
//       }

//       const lastNum = stack[unit]

//       if (Number(num) < Number(lastNum)) {
//         stack.pop()
//         stack.push(num)
//         insert = j
//       }

//       j++
//     }

//     remain -= (insert - i)
//     i = insert + 1
//     unit++
//   }

//   const notZero = stack.findIndex(num => num !== '0')
//   return stack.slice(notZero).join('') || '0'
// }

function removeKdigits(s: string, k: number): string {
  const stack = []
  let remove = 0

  for (let i = 0; i < s.length; i++) {
    console.log(i, stack)
    const num = Number(s[i])

    while (num < (stack.at(-1) || -Infinity) && remove < k) {
      stack.pop()
      remove++
    }

    stack.push(num)
  }

  const notZero = stack.findIndex(num => num !== 0)
  return stack.slice(notZero, (stack.length - (k - remove))).join('') || '0'
}

// console.log(removeKdigits('1432219', 3))
// console.log(removeKdigits('10200', 1))
// console.log(removeKdigits('10', 2))
// console.log(removeKdigits('111222', 3))
// console.log(removeKdigits('9991', 1))
console.log(removeKdigits('123456', 3))


