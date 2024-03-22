console.clear()

// function merge(intervals: number[][]): number[][] {
//   if (intervals.length <= 1) {
//     return intervals
//   }

//   // 重點要先排序，不然 case 會太多
//   intervals = intervals.sort((a, b) => a[0] - b[0])

//   const result = []

//   let min = null
//   let max = null

//   for (const interval of intervals) {
//     if (min === null || max === null) {
//       min = interval[0]
//       max = interval[1]
//       result.push([min, max])
//     }
//     else {
//       const [currentMin, currentMax] = interval

//       if (currentMin > max) {
//         min = currentMin
//         max = currentMax
//         result.push([min, max])
//       }
//       else {
//         max = Math.max(max, currentMax)
//         result.pop()
//         result.push([min, max])
//       }
//     }

//     // console.log(result)
//   }

//   console.log(result)

//   return result
// }

// function merge(intervals: number[][]): number[][] {
//   intervals = intervals.sort((a, b) => a[0] - b[0])
  
//   const ans = []

//   let i = 0
//   let j = 0
//   let l
//   let r

//   do {
//     l = intervals[i][0]
//     r = intervals[j][1]

//     while (true) {
//       if (intervals[j + 1]?.[0] <= r) {
//         r = Math.max(r, intervals[j + 1][1])
//         j++
//         continue
//       }

//       ans.push([l, r])
//       i = j = j + 1
//       break
//     }
//   } while (j < intervals.length)

//   return ans
// }

function merge(intervals: number[][]): number[][] {
  const timeline: Record<number, { starts: number, ends: number }> = {}

  for (const interval of intervals) {
    if (!timeline[interval[0]]) {
      timeline[interval[0]] = { starts: 0, ends: 0 }
    }

    if (!timeline[interval[1]]) {
      timeline[interval[1]] = { starts: 0, ends: 0 }
    }

    timeline[interval[0]].starts++
    timeline[interval[1]].ends++
  }

  let left = null
  let right = null
  let overlaps = 0
  const ans = []

  for (const time in timeline) {
    if (!overlaps && timeline[time].starts === timeline[time].ends) {
      // 特殊情況: 起點與終點相同
      ans.push([Number(time), Number(time)])
      continue
    }

    overlaps += timeline[time].starts
    overlaps -= timeline[time].ends
    // console.log(`time: ${time}, overlaps: ${overlaps}`)

    if (!!overlaps && left === null) {
      left = time
      // console.log(`left: ${left}, right: ${right}`)
    }

    if (!overlaps) {
      right = time
      // console.log(`left: ${left}, right: ${right}`)

      ans.push([Number(left), Number(right)])
      left = null
      right = null
      // console.log(`left: ${left}, right: ${right}`)
    }
  }

  return ans
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 5]]))
console.log(merge([[1, 4], [0, 0]]))
console.log(merge([[1, 4], [2, 2]]))
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]))
console.log(merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]]))
console.log(merge([[1, 4], [5, 6]]))
console.log(merge([[1, 4]]))
console.log(merge([[1, 4], [0, 2], [3, 5]]))
console.log(merge([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]))

export {}
