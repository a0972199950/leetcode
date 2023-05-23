// 1301. 

console.clear()

// paste function here

const graph = {
  1: [2, 3, 4],
  2: [1, 5],
  3: [1, 5],
  4: [1, 6],
  5: [2, 3, 7],
  6: [4, 7],
  7: [5, 6]
}

async function fetchNeighbors (node: number): Promise<number[]> {
  try {
    return new Promise(resolve => {
      setTimeout(() => resolve(graph[String(node)]), 1000)
    })
  } catch (e) {
    console.error(e)
  }
}

async function searchGraph (node: number) {
  const result = [node]
  
  const neighbors = await fetchNeighbors(node)
  let next = neighbors
  
  while (next.length) {
    const { sum: newNext } = (await Promise
      .all(next.map(node => {
        return fetchNeighbors(node)
      })))
      .reduce((sum, arr) => ([...sum, ...arr]), [])
      .reduce(({ alreadyHas, sum }, node) => {
        if (!alreadyHas.includes(node)) {
          alreadyHas.push(node)
          sum.push(node)
        }

        return { alreadyHas, sum }
      }, {
        alreadyHas: [...result],
        sum: []
      })
  
    result.push(...next)
    next = newNext
  }
  
  console.log(...result)
}

// async function searchGraph (start: number) {
//   const queue = []
//   const visited = new Set()

//   // const neighbors = await fetchNeighbors(start)

//   queue.push(start)
//   visited.add(start)

//   while (queue.length) {
//     const item = queue.shift()
//     const neighbors = await fetchNeighbors(item)

//     console.log(item)

//     for (const neighbor of neighbors) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor)
//         queue.push(neighbor)
//       }
//     }
//   }
// }

searchGraph(1)


export {}
