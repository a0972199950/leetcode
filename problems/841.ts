// 841. Keys and Rooms

console.clear()

function canVisitAllRooms(rooms: number[][]): boolean {
  const hasVisited = new Set<number>().add(0)

  const stack = [...rooms[0]]

  while (stack.length) {
    const nextRoom = stack.pop()

    if (!hasVisited.has(nextRoom)) {
      stack.push(...rooms[nextRoom])
      hasVisited.add(nextRoom)
    }
  }

  return hasVisited.size === rooms.length
}

console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))

export {}
