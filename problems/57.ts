// 57. Insert Interval

console.clear()

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const [targetMin, targetMax] = newInterval
  const result = []
  let min = targetMin
  let max = targetMax
  let inserted = false

  for (const interval of intervals) {
    const [currentMin, currentMax] = interval

    if (currentMax < targetMin) {
      result.push(interval)
    }
    else if (currentMin > targetMax) {
      if (!inserted) {
        result.push([min, max])
        inserted = true
      }

      result.push(interval)
    }
    else {
      min = Math.min(min, currentMin)
      max = Math.max(max, currentMax)
    }
  }

  if (!inserted) {
    result.push([min, max])
  }

  console.log(result)

  return result
}

insert([[1, 3], [6, 9]], [2, 5])
insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
insert([], [5, 7])
insert([[1, 2], [10, 11]], [5, 7])
insert([[1, 5]], [2, 3])


