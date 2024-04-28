// 739. Daily Temperatures

console.clear()

interface Node {
  index: number
  temperature: number
}

// function dailyTemperatures(temperatures: number[]): number[] {
//   const stack: Node[] = []
//   const result = []

//   for (let i = 0; i < temperatures.length; i++) {
//     const node: Node = { index: i, temperature: temperatures[i] }
//     let pushed = false

//     while (!pushed) {
//       const lastNode = stack[stack.length - 1]

//       if (!lastNode || lastNode.temperature >= node.temperature) {
//         stack.push(node)
//         pushed = true
//       } else {
//         stack.pop()
//         result[lastNode.index] = node.index - lastNode.index
//       }
//     }
//   }

//   for (const node of stack) {
//     result[node.index] = 0
//   }

//   return result
// }

// function dailyTemperatures(temperatures: number[]): number[] {
//   const stack = []
//   const ans = Array(temperatures.length).fill(0)

//   for (let i = 0; i < temperatures.length; i++) {
//     const node = { index: i, temperature: temperatures[i] }

//     if (!stack.length) {
//       stack.push(node)
//       continue
//     }

//     let last = stack[stack.length - 1]

//     if (node.temperature <= last.temperature) {
//       stack.push(node)
//       continue
//     }

//     while (!!last && last.temperature < node.temperature) {
//       ans[last.index] = node.index - last.index
//       stack.pop()
//       last = stack[stack.length - 1]
//     }

//     stack.push(node)
//   }

//   return ans
// }

function dailyTemperatures(temperatures: number[]): number[] {
  const result = Array(temperatures.length).fill(0)
  const stack: { i: number, temperature: number }[] = []

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i]

    while (stack.at(-1)?.temperature < temperature) {
      const date = stack.pop()
      result[date.i] = i - date.i
    }

    stack.push({ i, temperature })
  }

  return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
console.log(dailyTemperatures([30, 60, 90]))
console.log(dailyTemperatures([100, 60, 30]))
console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]))

export {}
