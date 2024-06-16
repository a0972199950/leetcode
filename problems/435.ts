// 435. Non-overlapping Intervals

export {}
console.clear()

// function eraseOverlapIntervals(intervals: number[][]): number {
//   intervals = intervals.sort((a, b) => a[0] - b[0])
//   let removes = 0
//   let pointer = intervals[0][1]

//   for (let i = 1; i < intervals.length; i++) {
//     const [currentMin, currentMax] = intervals[i]

//     if (currentMax <= pointer) {
//       removes++
//       pointer = currentMax
//     } else {
//       if (currentMin < pointer) {
//         removes++
//       } else {
//         pointer = currentMax
//       }
//     }
//   }

//   console.log(removes)

//   return removes
// }

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0])

  let lastMax = intervals[0][1]
  let removes = 0

  for (let i = 1; i < intervals.length; i++) {
    const [currentMin, currentMax] = intervals[i]

    if (currentMin >= lastMax) {
      lastMax = currentMax
    }
    else {
      if (currentMax < lastMax) {
        lastMax = currentMax
      }

      removes++
    }
  }

  return removes
}

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]))
console.log(eraseOverlapIntervals([[0, 2], [1, 3], [2, 4], [3, 5], [4, 6]]))
console.log(eraseOverlapIntervals([[0, 2], [1, 3], [1, 3], [2, 4], [3, 5], [3, 5], [4, 6]]))


