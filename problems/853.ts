// 853. Car Fleet

console.clear()

// function carFleet(target: number, position: number[], speed: number[]): number {
//   let fleets = position.length

//   let map: Record<number, number> = position.reduce((sum, p, i) => ({ ...sum, [p]: speed[i] }), {})

//   while (Object.keys(map).length) {
//     console.log(map)
//     const nextMap = {}
//     const allSpeeds = new Set()
//     let lastPosition = Infinity

//     Object
//       .entries(map)
//       .sort((a, b) => Number(b[0]) - Number(a[0]))
//       .forEach(([position, speed]) => {
//         let nextPosition = Number(position) + Number(speed)

//         if (nextPosition > lastPosition) {
//           // 超車
//           fleets--
//           nextPosition = Math.min(nextPosition, lastPosition)
//           nextMap[nextPosition] = Math.min(nextMap[nextPosition], speed)
//           allSpeeds.delete(Math.max(nextMap[nextPosition], speed))
//           allSpeeds.add(Math.min(nextMap[nextPosition], speed))
//         } else if (nextPosition === lastPosition) {
//           // 交會
//           fleets--
//           nextMap[nextPosition] = Math.min(nextMap[nextPosition], speed)
//           allSpeeds.delete(Math.max(nextMap[nextPosition], speed))
//           allSpeeds.add(Math.min(nextMap[nextPosition], speed))
//         } else if (nextPosition > target) {
//           // do nothing
//         } else {
//           nextMap[nextPosition] = speed
//           allSpeeds.add(speed)
//         }

//         lastPosition = nextPosition
//       })

//     // map = nextMap

//     if (allSpeeds.size === 1) {
//       break
//     } else {
//       map = nextMap
//     }
//   }

//   return fleets
// };

function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position
    .map((p, i) => ({ position: p, speed: speed[i] }))
    .sort((a, b) => a.position - b.position)

  const stack = []

  while (cars.length) {
    const car = cars.pop()

    if (!stack.length) {
      stack.push(car)
      continue
    }

    const frontCat = stack[stack.length - 1]

    const timeNeedByCar = (target - car.position) / car.speed
    const timeNeedByFrontCar = (target - frontCat.position) / frontCat.speed

    if (timeNeedByCar > timeNeedByFrontCar) {
      stack.push(car)
    }
  }

  return stack.length
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])) // 3
console.log(carFleet(10, [3], [3])) // 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])) // 1
console.log(carFleet(100, [0], [1])) // 1
console.log(carFleet(20, [6, 2, 17], [3, 9, 2])) // 2
console.log(carFleet(16, [11, 14, 13, 6], [2, 2, 6, 7])) // 2
console.log(carFleet(13, [10, 2, 5, 7, 4, 6, 11], [7, 5, 10, 5, 9, 4, 1])) // 2

export {}
