// 402. Remove K Digits
// 最後練習時間：2026-09-01
// https://leetcode.com/problems/remove-k-digits/

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

// function removeKdigits(s: string, k: number): string {
//   const stack = []
//   let remove = 0

//   for (let i = 0; i < s.length; i++) {
//     console.log(i, stack)
//     const num = Number(s[i])

//     while (num < (stack.at(-1) || -Infinity) && remove < k) {
//       stack.pop()
//       remove++
//     }

//     stack.push(num)
//   }

//   const notZero = stack.findIndex(num => num !== 0)
//   return stack.slice(notZero, (stack.length - (k - remove))).join('') || '0'
// }

// 最後練習時間：2026-09-01
// Time: O(2n + k) > O(n)
// Space: O(n - k) > O(n)
function removeKdigits(num: string, _k: number): string {
  const stack: string[] = []
  let k = _k

  for (const target of num) {
    // console.log(stack, k)

    // console.log('target: ', target)

    while (stack.length
      && Number(stack.at(-1)) > Number(target)
      && k
    ) {
      stack.pop()
      k--
    }

    if (stack.length || target !== '0') {
      stack.push(target)
    }
  }

  while (k) {
    stack.pop()
    k--
  }

  return stack.join('') || '0'
}

console.log(removeKdigits('1432219', 3)) // 1219
console.log(removeKdigits('10200', 1))
console.log(removeKdigits('10', 2))
console.log(removeKdigits('111222', 3)) // 111
console.log(removeKdigits('9991', 1))
console.log(removeKdigits('123456', 3)) // 123
console.log(removeKdigits('10', 1)) // 0

