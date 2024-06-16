// 452. Minimum Number of Arrows to Burst Balloons

export {}
console.clear()

function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0])

  let min = -Infinity
  let max = Infinity
  let arrows = 1

  for (const point of points) {
    if (point[0] > max) {
      // console.log(point, min, max)
      arrows++
      min = point[0]
      max = point[1]
      continue
    }

    min = Math.max(min, point[0])
    max = Math.min(max, point[1])
  }

  return arrows
}

console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]))
console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]))
console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]))
