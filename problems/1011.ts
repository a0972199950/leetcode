// 1011. Capacity To Ship Packages Within D Days

export {}
console.clear()

function shipWithinDays(weights: number[], days: number): number {
  const getMinDays = (ship: number) => {
    let shipWeight = 0
    let ships = 1

    for (const weight of weights) {
      if (shipWeight + weight > ship) {
        ships++
        shipWeight = weight
        continue
      }

      shipWeight += weight
    }

    return ships
  }

  let min = Math.max(...weights)
  let max = weights.reduce((sum, weight) => sum + weight, 0)
  let center

  while (max - min > 1) {
    center = Math.ceil(min + (max - min) / 2)

    if (getMinDays(center) > days) {
      min = center
    } else {
      max = center
    }
  }

  return getMinDays(min) <= days ? min : max
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3))
console.log(shipWithinDays([1, 2, 3, 1, 1], 4))


