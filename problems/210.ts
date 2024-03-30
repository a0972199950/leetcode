// 210. Course Schedule II

console.clear()

// function findOrder(numCourses: number, prerequisites: number[][]): number[] {
//   const courses: Record<number, Set<number>> = Array.from(Array(numCourses)).reduce((sum, _item, index) => ({
//     ...sum,
//     [index]: new Set<number>()
//   }), {})

//   prerequisites.forEach(([targetCourse, preCourse]) => {
//     courses[targetCourse].add(preCourse)
//   })

//   const order = []

//   const coursesArr: [string, Set<number>][] = Object.entries(courses)

//   console.log(coursesArr)

//   while (order.length < numCourses) {
//     const index = coursesArr.findIndex(item => {
//       return item[1].size === 0
//     })

//     if (index < 0) {
//       return []
//     }

//     const course = Number(coursesArr[index][0])
//     coursesArr.splice(index, 1)
//     coursesArr.forEach(item => item[1].delete(course))
//     order.push(course)
//   }

//   console.log(order)

//   return order
// }

// function findOrder(numCourses: number, prerequisites: number[][]): number[] {
//   const agencyList: Record<number, { next: Set<number>, prev: Set<number> }> = Array.from(Array(numCourses)).reduce((sum, _item, index) => {
//     return {
//       ...sum,
//       [index]: {
//         prev: new Set<number>(),
//         next: new Set<number>()
//       }
//     }
//   }, {})

//   try {
//     prerequisites.forEach(([nextCourse, prevCourse]) => {
//       agencyList[nextCourse].prev.add(prevCourse)
//       agencyList[prevCourse].next.add(nextCourse)
//     })
//   } catch (e) {
//     return []
//   }

//   console.log(agencyList)

//   const findFirstNoPrevCourse = () => {
//     const course = Object
//       .entries(agencyList)
//       .find(([_course, { prev }]) => {
//         return prev.size === 0
//       })?.[0] ?? null

//     if (course === null) {
//       throw 'impossible'
//     }

//     return Number(course)
//   }

//   const result = []

//   try {
//     const startCourse = findFirstNoPrevCourse()
//     const queue = [startCourse]

//     while (result.length < numCourses) {
//       const currentCourse = queue.shift()
//       result.push(currentCourse)
//       console.log('currentCourse: ', currentCourse, agencyList)

//       const currentCourseNext = agencyList[currentCourse].next
//       delete agencyList[currentCourse]

//       currentCourseNext.forEach(nextCourse => {
//         agencyList[nextCourse].prev.delete(currentCourse)

//         if (agencyList[nextCourse].prev.size === 0) {
//           queue.push(nextCourse)
//         }
//       })

//       if (!queue.length && result.length < numCourses) {
//         const nextCourse = findFirstNoPrevCourse()
//         queue.push(nextCourse)
//       }

//       console.log(`Deal with: ${currentCourse}, `, agencyList, queue)
//     }
//   } catch (e) {
//     return []
//   }

//   return result
// }

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = Array(numCourses).fill(null).map(() => ([]))

  for (const [course, pre] of prerequisites) {
    graph[course].push(pre)
  }

  // console.log(graph)

  const visited = new Set()

  const dfs = (course: number, history: Set<number>): number[] | false => {
    if (history.has(course)) {
      return false
    }

    if (!graph[course].length) {
      return [course]
    }

    history.add(course)
    let preOrder = []

    for (const pre of graph[course]) {
      if (visited.has(pre)) {
        continue
      }

      const result = dfs(pre, history)

      // 有環
      if (!result) {
        return false
      }

      // console.log(pre, result)

      preOrder = result.length > preOrder.length ? result : preOrder
    }

    history.delete(course)

    return [...preOrder, course]
  }

  const order = []
  const history = new Set<number>()

  for (const course in graph) {
    if (visited.has(Number(course))) {
      continue
    }

    const result = dfs(Number(course), history)

    // console.log(`check ${course}, got `, result, visited)

    // 有環
    if (!result) {
      return []
    }

    result.forEach(course => visited.add(course))
    order.push(...result)
  }

  return order
}

// console.log(findOrder(2, [[1, 0]]))
// console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))
// console.log(findOrder(6, [[5, 0], [4, 0], [0, 1], [0, 2], [1, 3], [3, 2]]))
// console.log(findOrder(1, []))
// console.log(findOrder(2, [[0, 1], [1, 0]]))
// console.log(findOrder(3, [[2, 0], [2, 1]]))
// console.log(findOrder(3, [[1, 0], [0, 2], [2, 1]]))
console.log(findOrder(3, [[1, 0], [1, 2], [0, 1]]))
// console.log(findOrder(7, [[1, 0], [0, 3], [0, 2], [3, 2], [2, 5], [4, 5], [5, 6], [2, 4]]))

export {}
