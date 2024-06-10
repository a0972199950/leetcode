// 261. Graph Valid Tree

console.clear()

function validTree(n: number, edges: number[][]): boolean {
  if (!edges.length) {
    return n === 1
  }

  const graph = Array(n).fill(null).map(() => Array(0))

  for (const edge of edges) {
    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
  }

  console.log(graph)

  const history = new Set()
  let isTree = true

  const dfs = (node: number, previous?: number) => {
    if (!isTree) {
      return
    }

    console.log(node, previous)

    if (history.has(node)) {
      isTree = false
      return
    }

    history.add(node)

    if (!isTree) {
      return
    }

    if (isTree) {
      for (const neighbor of graph[node]) {
        if (neighbor === previous) {
          continue
        }
  
        dfs(neighbor, node)
      }
    }
  }

  dfs(0)

  if (history.size !== n) {
    isTree = false
  }

  return isTree
}

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))
// console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]))
// console.log(validTree(4, [[0, 1], [2, 3]]))
// console.log(validTree(1, []))


