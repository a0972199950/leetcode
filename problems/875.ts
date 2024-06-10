// 875. Koko Eating Bananas

console.clear()

function minEatingSpeed(piles: number[], h: number): number {
  let min = 1
  let max = Math.max(...piles)

  const canFinish = (minSpeed: number) => {
    let minHours = 0
    for (let i = 0; i < piles.length; i++) {
      minHours += Math.ceil(piles[i] / minSpeed)
      if (minHours > h) {
        return false
      }
    }

    return true
  }

  while (max - min > 1) {
    console.log(`min: ${min}, max: ${max}`)
    const center = Math.ceil(min + (max - min) / 2)
    console.log('center: ', center)
    
    if (canFinish(center)) {
      // try less
      max = center
    } else {
      // try more
      min = center + 1
    }
  }

  if (canFinish(min)) {
    return min
  } else {
    return max
  }
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))
console.log(minEatingSpeed([312884470], 968709470)) // 1


