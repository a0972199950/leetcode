// 547. Number of Provinces

console.clear()

function findCircleNum(isConnected: number[][]): number {
  const waitingCheck = isConnected.reduce((sum, _item, index) => ({ ...sum, [index]: true }), {})
  const queue = []
  const provinces: Set<number>[] = []

  while (Object.keys(waitingCheck).length) {
    const currentCity = Number(Object.keys(waitingCheck)[0])

    let currentProvince = new Set<number>()
    const index = provinces.findIndex(province => province.has(currentCity))

    if (index > 0) {
      currentProvince = provinces.splice(index, 1)[0]
    }

    queue.push(currentCity)

    while (queue.length) {
      console.log(currentCity, 'queue: ', queue)

      const checkingCity = queue.shift()
      delete waitingCheck[checkingCity]

      if (!currentProvince.has(checkingCity)) {
        currentProvince.add(checkingCity)

        for (let city = 0; city < isConnected[checkingCity].length; city++) {
          if (isConnected[checkingCity][city] && !currentProvince.has(city)) {
            queue.push(city)
          }
        }
      }
    }

    provinces.push(currentProvince)
  }

  console.log(provinces)
  return provinces.length
}

// findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])
findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])


