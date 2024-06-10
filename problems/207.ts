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

// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//   prerequisites = prerequisites.sort((a, b) => a[0] - b[0])

//   const preMaps: {
//     member: Set<number>
//     map: Record<number, number[]>
//   }[] = []

//   for (const [target, pre] of prerequisites) {
//     let i = 0

//     for (i = 0; i < preMaps.length; i++) {
//       const preMap = preMaps[i]
//       if (preMap.member.has(target) || preMap.member.has(pre)) {
//         preMap.member.add(target).add(pre)

//         if (!preMap.map[target]) {
//           preMap.map[target] = []
//         }

//         preMap.map[target].push(pre)
//         break
//       }
//     }

//     if (i === preMaps.length) {
//       preMaps.push({
//         member: new Set<number>().add(target).add(pre),
//         map: { [target]: [pre] }
//       })
//     }
//   }

//   const canCompleteMap = (member: Set<number>, map: Record<number, number[]>) => {
//     console.log('canCompleteMap? ', map)

//     const canComplete = (course: number, visited: Set<number>, history: Set<number>) => {
//       if (history.has(course)) {
//         console.log('a, false', course, visited)
//         history.delete(course)
//         return false
//       } else {
//         visited.add(course)
//         history.add(course)
//       }

//       if (!map[course]) {
//         console.log('b, true')
//         history.delete(course)
//         return true
//       }

//       const res = map[course].every(c => {
//         const res = canComplete(c, visited, history)
//         return res
//       })

//       console.log('c, ', res)
//       return res
//     }

//     return Object.keys(map).some(course => {
//       const visited = new Set<number>()
//       console.log(`假定 ${course} 為頭開始檢查`)
//       const tempRes = canComplete(Number(course), visited, new Set())
//       const res = tempRes && visited.size === member.size
//       console.log(`假定 ${course} 為頭開始檢查, 結果: ${tempRes}. 檢查了 ${visited.size}/${member.size} 個課程, 總結果: ${res}`)
//       return res
//     })
//   }

//   return preMaps.every(preMap => {
//     const res = canCompleteMap(preMap.member, preMap.map)
//     console.log(res)
//     return res
//   })
// }

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = Array(numCourses)

  for (const [target, pre] of prerequisites) {
    if (!graph[target]) {
      graph[target] = []
    }

    graph[target].push(pre)
  }

  const canCompletes = new Set<number>()
  const canNotCompletes = new Set<number>()

  const dfs = (target: number, history: Set<number>) => {
    if (canCompletes.has(target)) {
      return true
    }

    if (canNotCompletes.has(target)) {
      return false
    }

    if (!graph[target]) {
      canCompletes.add(target)
      return true
    }

    if (history.has(target)) {
      canNotCompletes.add(target)
      return false
    }

    history.add(target)

    const canComplete = graph[target].every(pre => dfs(pre, history))

    history.delete(target)

    if (canComplete) {
      canCompletes.add(target)
    } else {
      canNotCompletes.add(target)
    }

    return canComplete
  }

  const history = new Set<number>()

  for (const target in graph) {
    if (!dfs(Number(target), history)) {
      return false
    }
  }

  return true
}


console.log(canFinish(2, [[1, 0]])) // true
console.log(canFinish(2, [[1, 0], [0, 1]])) // false
console.log(canFinish(2, [[0, 1]])) // true
console.log(canFinish(10, [[0, 1], [0, 2], [1, 5], [2, 4], [5, 6], [4, 6], [3, 7], [7, 8]])) // true
console.log(canFinish(10, [[0, 1], [0, 2], [1, 5], [2, 4], [5, 6], [4, 6], [3, 7], [7, 8], [8, 3]])) // false
console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]])) // true
console.log(canFinish(4, [[0, 1], [2, 3], [1, 2], [3, 0]])) // false
console.log(canFinish(4, [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]])) //false
console.log(canFinish(3, [[1, 0], [2, 0]])) //true
console.log(canFinish(100, [[1, 0], [2, 0], [2, 1], [3, 1], [3, 2], [4, 2], [4, 3], [5, 3], [5, 4], [6, 4], [6, 5], [7, 5], [7, 6], [8, 6], [8, 7], [9, 7], [9, 8], [10, 8], [10, 9], [11, 9], [11, 10], [12, 10], [12, 11], [13, 11], [13, 12], [14, 12], [14, 13], [15, 13], [15, 14], [16, 14], [16, 15], [17, 15], [17, 16], [18, 16], [18, 17], [19, 17], [19, 18], [20, 18], [20, 19], [21, 19], [21, 20], [22, 20], [22, 21], [23, 21], [23, 22], [24, 22], [24, 23], [25, 23], [25, 24], [26, 24], [26, 25], [27, 25], [27, 26], [28, 26], [28, 27], [29, 27], [29, 28], [30, 28], [30, 29], [31, 29], [31, 30], [32, 30], [32, 31], [33, 31], [33, 32], [34, 32], [34, 33], [35, 33], [35, 34], [36, 34], [36, 35], [37, 35], [37, 36], [38, 36], [38, 37], [39, 37], [39, 38], [40, 38], [40, 39], [41, 39], [41, 40], [42, 40], [42, 41], [43, 41], [43, 42], [44, 42], [44, 43], [45, 43], [45, 44], [46, 44], [46, 45], [47, 45], [47, 46], [48, 46], [48, 47], [49, 47], [49, 48], [50, 48], [50, 49], [51, 49], [51, 50], [52, 50], [52, 51], [53, 51], [53, 52], [54, 52], [54, 53], [55, 53], [55, 54], [56, 54], [56, 55], [57, 55], [57, 56], [58, 56], [58, 57], [59, 57], [59, 58], [60, 58], [60, 59], [61, 59], [61, 60], [62, 60], [62, 61], [63, 61], [63, 62], [64, 62], [64, 63], [65, 63], [65, 64], [66, 64], [66, 65], [67, 65], [67, 66], [68, 66], [68, 67], [69, 67], [69, 68], [70, 68], [70, 69], [71, 69], [71, 70], [72, 70], [72, 71], [73, 71], [73, 72], [74, 72], [74, 73], [75, 73], [75, 74], [76, 74], [76, 75], [77, 75], [77, 76], [78, 76], [78, 77], [79, 77], [79, 78], [80, 78], [80, 79], [81, 79], [81, 80], [82, 80], [82, 81], [83, 81], [83, 82], [84, 82], [84, 83], [85, 83], [85, 84], [86, 84], [86, 85], [87, 85], [87, 86], [88, 86], [88, 87], [89, 87], [89, 88], [90, 88], [90, 89], [91, 89], [91, 90], [92, 90], [92, 91], [93, 91], [93, 92], [94, 92], [94, 93], [95, 93], [95, 94], [96, 94], [96, 95], [97, 95], [97, 96], [98, 96], [98, 97], [99, 97]])) //true


