// 399. Evaluate Division

export {}
console.clear()

interface Node {
  to: string
  value: number
}

type Graph = Record<string, Node[]>

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const graph: Graph = {}

  for (const [index, [from, to]] of equations.entries()) {
    if (!graph[from]) {
      graph[from] = []
    }

    if (!graph[to]) {
      graph[to] = []
    }

    const value = values[index]

    graph[from].push({ to, value })
    graph[to].push({ to: from, value: 1 / value })
  }

  const result = []

  for (const [from, to] of queries) {
    if (!(from in graph) || !(to in graph)) {
      result.push(-1)
      continue
    }

    const history = new Set<string>()
    
    const dfs = (str: string, sum: number) => {
      if (history.has(str)) {
        return
      }

      history.add(str)

      if (str === to) {
        result.push(sum)
        return true
      }

      for (const node of graph[str]) {
        if (dfs(node.to, node.value * sum)) {
          return true
        }
      }

      history.delete(str)
    }

    if (!dfs(from, 1)) {
      result.push(-1)
    }
  }

  return result
}

console.log(calcEquation([['a', 'b'], ['b', 'c']], [2.0, 3.0], [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]))
console.log(calcEquation([['a', 'b'], ['b', 'c'], ['bc', 'cd']], [1.5, 2.5, 5.0], [['a', 'c'], ['c', 'b'], ['bc', 'cd'], ['cd', 'bc']]))
console.log(calcEquation([['a', 'b']], [0.5], [['a', 'b'], ['b', 'a'], ['a', 'c'], ['x', 'y']]))
console.log(calcEquation([['a', 'b'], ['c', 'd']], [1.0, 1.0], [['a', 'c'], ['b', 'd'], ['b', 'a'], ['d', 'c']]))
