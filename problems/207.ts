// 207. Course Schedule

console.clear()

// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//   let graph: Set<number>[] = Array(numCourses).fill(null)
//   graph = graph.map(() => new Set())

//   for (const [course, condition] of prerequisites) {
//     graph[course].add(condition)
//   }

//   const removePrequisite = (course: number) => {
//     for (const item of graph) {
//       item.delete(course)
//     }
//   }

//   const coursesTaken = []

//   while_loop:
//   while (true) {

//     let i = 0
//     while (i < graph.length) {
//       if (graph[i].size === 0) {
//         coursesTaken.push(i)
//         removePrequisite(i)
//         console.log(coursesTaken, graph)
//         break
//       }

//       i++
//     }

//     return coursesTaken.length === numCourses
//   }
// }

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  prerequisites = prerequisites.sort((a, b) => a[0] - b[0])

  const preMaps: {
    member: Set<number>
    map: Record<number, number[]>
  }[] = []

  for (const [target, pre] of prerequisites) {
    let i = 0

    for (i = 0; i < preMaps.length; i++) {
      const preMap = preMaps[i]
      if (preMap.member.has(target) || preMap.member.has(pre)) {
        preMap.member.add(target).add(pre)

        if (!preMap.map[target]) {
          preMap.map[target] = []
        }

        preMap.map[target].push(pre)
        break
      }
    }

    if (i === preMaps.length) {
      preMaps.push({
        member: new Set<number>().add(target).add(pre),
        map: { [target]: [pre] }
      })
    }
  }

  const canCompleteMap = (member: Set<number>, map: Record<number, number[]>) => {
    console.log('canCompleteMap? ', map)

    const canComplete = (course: number, visited: Set<number>, history: Set<number>) => {
      if (history.has(course)) {
        console.log('a, false', course, visited)
        history.delete(course)
        return false
      } else {
        visited.add(course)
        history.add(course)
      }

      if (!map[course]) {
        console.log('b, true')
        history.delete(course)
        return true
      }

      const res = map[course].every(c => {
        const res = canComplete(c, visited, history)
        return res
      })

      console.log('c, ', res)
      return res
    }

    return Object.keys(map).some(course => {
      const visited = new Set<number>()
      console.log(`假定 ${course} 為頭開始檢查`)
      const tempRes = canComplete(Number(course), visited, new Set())
      const res = tempRes && visited.size === member.size
      console.log(`假定 ${course} 為頭開始檢查, 結果: ${tempRes}. 檢查了 ${visited.size}/${member.size} 個課程, 總結果: ${res}`)
      return res
    })
  }

  return preMaps.every(preMap => {
    const res = canCompleteMap(preMap.member, preMap.map)
    console.log(res)
    return res
  })
}


// console.log(canFinish(2, [[1,0]])) // true
// console.log(canFinish(2, [[1,0],[0,1]])) // false
// console.log(canFinish(2, [[0,1]])) // true
// console.log(canFinish(10, [[0, 1], [0, 2], [1, 5], [2, 4], [5, 6], [4, 6], [3, 7], [7, 8]])) // true
// console.log(canFinish(10, [[0, 1], [0, 2], [1, 5], [2, 4], [5, 6], [4, 6], [3, 7], [7, 8], [8, 3]])) // false
// console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]])) // true
// console.log(canFinish(4, [[0,1],[2,3],[1,2],[3,0]])) // false
// console.log(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]])) //false
console.log(canFinish(3, [[1, 0], [2, 0]])) //true

export {}
