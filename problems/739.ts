// 739. Daily Temperatures

console.clear()

interface Node {
  index: number
  temperature: number
}

function dailyTemperatures(temperatures: number[]): number[] {
  const stack: Node[] = []
  const result = []

  for (let i = 0; i < temperatures.length; i++) {
    const node: Node = { index: i, temperature: temperatures[i] }
    let pushed = false

    while (!pushed) {
      const lastNode = stack[stack.length - 1]

      if (!lastNode || lastNode.temperature >= node.temperature) {
        stack.push(node)
        pushed = true
      } else {
        stack.pop()
        result[lastNode.index] = node.index - lastNode.index
      }
    }
  }

  for (const node of stack) {
    result[node.index] = 0
  }

  return result
}

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// console.log(dailyTemperatures([30, 40, 50, 60]))
// console.log(dailyTemperatures([30, 60, 90]))
console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]))

export {}
