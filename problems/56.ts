function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals
  }

  // 重點要先排序，不然 case 會太多
  intervals = intervals.sort((a, b) => a[0] - b[0])

  const result = []

  let min = null
  let max = null

  for (const interval of intervals) {
    if (min === null || max === null) {
      min = interval[0]
      max = interval[1]
      result.push([min, max])
    }
    else {
      const [currentMin, currentMax] = interval

      if (currentMin > max) {
        min = currentMin
        max = currentMax
        result.push([min, max])
      }
      else {
        max = Math.max(max, currentMax)
        result.pop()
        result.push([min, max])
      }
    }

    // console.log(result)
  }

  console.log(result)

  return result
}

// merge([[1, 3], [2, 6], [8, 10], [15, 18]])
// merge([[1, 4], [0, 0]])
// merge([[1, 4], [2, 2]])
// merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])
merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]])

export {}
