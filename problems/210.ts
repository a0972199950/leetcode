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

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const agencyList: Record<number, { next: Set<number>, prev: Set<number> }> = Array.from(Array(numCourses)).reduce((sum, _item, index) => {
    return {
      ...sum,
      [index]: {
        prev: new Set<number>(),
        next: new Set<number>()
      }
    }
  }, {})

  try {
    prerequisites.forEach(([nextCourse, prevCourse]) => {
      agencyList[nextCourse].prev.add(prevCourse)
      agencyList[prevCourse].next.add(nextCourse)
    })
  } catch (e) {
    return []
  }

  console.log(agencyList)

  const findFirstNoPrevCourse = () => {
    const course = Object
      .entries(agencyList)
      .find(([_course, { prev }]) => {
        return prev.size === 0
      })?.[0] ?? null

    if (course === null) {
      throw 'impossible'
    }

    return Number(course)
  }

  const result = []

  try {
    const startCourse = findFirstNoPrevCourse()
    const queue = [startCourse]

    while (result.length < numCourses) {
      const currentCourse = queue.shift()
      result.push(currentCourse)
      console.log('currentCourse: ', currentCourse, agencyList)

      const currentCourseNext = agencyList[currentCourse].next
      delete agencyList[currentCourse]

      currentCourseNext.forEach(nextCourse => {
        agencyList[nextCourse].prev.delete(currentCourse)

        if (agencyList[nextCourse].prev.size === 0) {
          queue.push(nextCourse)
        }
      })

      if (!queue.length && result.length < numCourses) {
        const nextCourse = findFirstNoPrevCourse()
        queue.push(nextCourse)
      }

      console.log(`Deal with: ${currentCourse}, `, agencyList, queue)
    }
  } catch (e) {
    return []
  }

  return result
}

// console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))
// findOrder(2, [[1, 0]])
// findOrder(1, [])
// console.log(findOrder(2, [[0, 1], [1, 0]]))
// console.log(findOrder(3, [[2, 0], [2, 1]]))
console.log(findOrder(3, [[1, 0], [0, 2], [2, 1]]))

export {}
