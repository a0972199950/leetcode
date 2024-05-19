// 684. Redundant Connection

console.clear()

function findRedundantConnection(edges: number[][]): number[] {
  const graph: Record<number, number[]> = {}

  for (const edge of edges) {
    if (!graph[edge[0]]) {
      graph[edge[0]] = []
    }

    if (!graph[edge[1]]) {
      graph[edge[1]] = []
    }

    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
  }

  const n = Object.keys(graph).length

  const checkIsTree = () => {
    const history = new Set()
    let isTree = true

    const dfs = (node: number, prev?: number) => {
      if (history.has(node)) {
        isTree = false
        return
      }

      history.add(node)

      if (isTree) {
        for (const neighbor of graph[node]) {
          if (neighbor === prev) {
            continue
          }

          dfs(neighbor, node)
        }
      }
    }

    dfs(1)
    
    if (history.size !== n) {
      isTree = false
    }

    return isTree
  }

  for (let i = edges.length - 1; i >= 0; i--) {
    const edge = edges[i]

    graph[edge[0]] = graph[edge[0]].filter(node => node !== edge[1])
    graph[edge[1]] = graph[edge[1]].filter(node => node !== edge[0])

    const isTree = checkIsTree()

    if (isTree) {
      return edge
    }

    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
  }

  return []
}

// console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))
// console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))
// console.log(findRedundantConnection([]))
console.log(findRedundantConnection([[1, 2]]))

export {}
