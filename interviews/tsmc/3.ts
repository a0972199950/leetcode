// tsmc. 3

console.clear()

// 掃描線法
function countIntersections(startsAt: number[], endsAt: number[]): number[] {
  const result: number[] = startsAt.map(_item => 0)
  let activeLines: number[] = []

  const points = [...new Set([...startsAt, ...endsAt]).values()].sort((a, b) => a - b)

  for (let pointOrder = 0; pointOrder < points.length; pointOrder++) {
    const currentPoint = points[pointOrder]

    // 有線段 start
    const newActiveLines = []
    for (let i = 0; i < startsAt.length; i++) {
      const startPoint = startsAt[i]
      if (startPoint === currentPoint) {
        newActiveLines.push(i)
      }
    }

    // 加數字
    if (newActiveLines.length) {
      for (const activeLine of activeLines) {
        result[activeLine] += newActiveLines.length
      }

      activeLines = activeLines.concat(newActiveLines)

      for (const newActiveLine of newActiveLines) {
        result[newActiveLine] = activeLines.length - 1
      }
    }

    // console.log('currentPoint: ', currentPoint, 'activeLines: ', activeLines, 'lines: ', activeLines.length - 1)
    // console.log(result)

    // 有線段 end
    for (let i = 0; i < endsAt.length; i++) {
      const endPoint = endsAt[i]
      if (endPoint === currentPoint) {
        activeLines = activeLines.filter(item => item !== i)
      }
    }

  }

  return result
}

// interface Segment {
//   start: number
//   end: number
// }

// function countIntersections(startsAt: number[], endsAt: number[]): number[] {
//   const hasIntersection = (segment1: Segment, segment2: Segment) => {
//     if (segment1.end < segment1.start || segment2.end < segment2.start) {
//       throw `錯誤, ${segment1}, ${segment2}`
//     }

//     return segment1.start <= segment2.end && segment2.start <= segment1.end
//   }

//   const result: number[] = []

//   for (let i = 0; i < startsAt.length; i++) {
//     let intersections = 0

//     for (let j = 0; j < startsAt.length; j++) {
//       if (i === j) {
//         continue
//       }

//       const segment1: Segment = {
//         start: startsAt[i],
//         end: endsAt[i]
//       }

//       const segment2: Segment = {
//         start: startsAt[j],
//         end: endsAt[j]
//       }

//       if (hasIntersection(segment1, segment2)) {
//         intersections++
//       }
//     }

//     result.push(intersections)
//   }

//   return result
// }


console.log(countIntersections([1, 3], [4, 5])) // [1, 1]
console.log(countIntersections([1, 3], [5, 4])) // [1, 1]
console.log(countIntersections([3, 1, 5], [3, 5, 6])) // [1, 2, 1]
console.log(countIntersections([1, 3, 1], [4, 5, 4])) // [2, 2, 2]


