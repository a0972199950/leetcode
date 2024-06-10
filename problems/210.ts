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

// function findOrder(numCourses: number, prerequisites: number[][]): number[] {
//   const graph = Array(numCourses).fill(null).map(() => ([]))

//   for (const [course, pre] of prerequisites) {
//     graph[course].push(pre)
//   }

//   // console.log(graph)

//   const visited = new Set()

//   const dfs = (course: number, history: Set<number>): number[] | false => {
//     if (history.has(course)) {
//       return false
//     }

//     if (!graph[course].length) {
//       return [course]
//     }

//     history.add(course)
//     let preOrder = []

//     for (const pre of graph[course]) {
//       if (visited.has(pre)) {
//         continue
//       }

//       const result = dfs(pre, history)

//       // 有環
//       if (!result) {
//         return false
//       }

//       // console.log(pre, result)

//       preOrder = result.length > preOrder.length ? result : preOrder
//     }

//     history.delete(course)

//     return [...preOrder, course]
//   }

//   const order = []
//   const history = new Set<number>()

//   for (const course in graph) {
//     if (visited.has(Number(course))) {
//       continue
//     }

//     const result = dfs(Number(course), history)

//     // console.log(`check ${course}, got `, result, visited)

//     // 有環
//     if (!result) {
//       return []
//     }

//     result.forEach(course => visited.add(course))
//     order.push(...result)
//   }

//   return order
// }

// function findOrder(numCourses: number, prerequisites: number[][]): number[] {
//   const graph = Array(numCourses).fill(null).map(() => (new Set))

//   for (const [course, pre] of prerequisites) {
//     graph[course].add(pre)
//   }

//   console.log(graph)

//   const orders = []
//   const taken = new Set()

//   while (orders.length < numCourses) {
//     console.log(orders)
//     const order = []

//     for (let course = 0; course < graph.length; course++) {
//       if (taken.has(course)) {
//         continue
//       }

//       if (graph[course].size === 0) {
//         order.push(course)
//         taken.add(course)
//       }
//     }

//     if (!order.length) {
//       break
//     }

//     orders.push(...order)

//     for (const pres of graph) {
//       if (pres.size) {
//         order.forEach(course => pres.delete(course))
//       }
//     }
//   }

//   return orders.length === numCourses ? orders : []
// }

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = Array(numCourses).fill(null).map(() => ([]))

  for (const [course, pre] of prerequisites) {
    graph[course].push(pre)
  }

  const orders = []
  const taken = new Set()
  const history = new Set()

  const dfs = (course: number) => {
    // 有環
    if (history.has(course)) {
      console.log(course, '有環')
      return false
    }

    const pres = graph[course].filter(pre => !taken.has(pre))

    // 遇到葉節點
    if (!pres.length) {
      orders.push(course)
      taken.add(course)
      console.log(course, '遇到葉節點', orders)
      return true
    }

    history.add(course)
    const isPossible = pres.every(pre => {
      if (taken.has(pre)) {
        return true
      }

      return dfs(pre)
    }) 
    history.delete(course)

    // 子節點都遍歷完了
    if (isPossible) {
      orders.push(course)
      taken.add(course)
      console.log(course, '子節點都遍歷完了', orders)
    }

    return isPossible
  }

  for (let course = 0; course < graph.length; course++) {
    if (taken.has(course)) {
      continue
    }

    if (!dfs(course)) {
      return []
    }
  }

  return orders
}

console.log(findOrder(2, [[1, 0]]))
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))
console.log(findOrder(5, [[1, 2], [1, 3], [3, 4], [0, 1], [0, 3]]))
// console.log(findOrder(6, [[5, 0], [4, 0], [0, 1], [0, 2], [1, 3], [3, 2]]))
// console.log(findOrder(1, []))
console.log(findOrder(2, [[0, 1], [1, 0]]))
// console.log(findOrder(3, [[2, 0], [2, 1]]))
// console.log(findOrder(3, [[1, 0], [0, 2], [2, 1]]))
// console.log(findOrder(3, [[1, 0], [1, 2], [0, 1]]))
// console.log(findOrder(7, [[1, 0], [0, 3], [0, 2], [3, 2], [2, 5], [4, 5], [5, 6], [2, 4]]))


