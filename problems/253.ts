// 253. Meeting Rooms II

console.clear()

function minMeetingRooms(intervals: number[][]): number {
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

  let maxRooms = -Infinity
  let rooms = 0

  for (const time in timeline) {
    rooms += timeline[time].starts
    rooms -= timeline[time].ends

    maxRooms = Math.max(maxRooms, rooms)
  }

  return maxRooms
}

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]))
console.log(minMeetingRooms([[7, 10], [2, 4]]))

export {}
