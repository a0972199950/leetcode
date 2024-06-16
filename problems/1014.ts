// 1014. Best Sightseeing Pair

export {}
console.clear()

function maxScoreSightseeingPair(values: number[]): number {
  let maxScore = -Infinity
  let maxCurrentSpot = values[0] + 0

  for (let j = 1; j < values.length; j++) {
    maxScore = Math.max(maxScore, maxCurrentSpot + values[j] - j)
    maxCurrentSpot = Math.max(maxCurrentSpot, values[j] + j)
  }

  return maxScore
}

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]))
console.log(maxScoreSightseeingPair([1, 2]))


