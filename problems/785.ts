// 785. Is Graph Bipartite?

console.clear()

type Color = 'RED' | 'BLUE'

function isBipartite(graph: number[][]): boolean {
  const queue: number[] = []
  const history: Set<number> = new Set()
  const colorMap: Record<number, Color> = {}

  for (let target = 0; target < graph.length; target++) {
    queue.push(target)

    while (queue.length) {
      const target = queue.shift()

      if (history.has(target)) {
        continue
      } else {
        history.add(target)
      }

      if (!colorMap[target]) {
        colorMap[target] = 'RED'
      }

      const neighborColor = colorMap[target] === 'RED' ? 'BLUE' : 'RED'
      const neighbors = graph[target]

      for (const neighbor of neighbors) {
        if (!!colorMap[neighbor]  && colorMap[neighbor] !== neighborColor) {
          return false
        }

        colorMap[neighbor] = neighborColor
        queue.push(neighbor)
      }
    }
  }

  return true
}

console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]))
console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))

export {}
