// 274. H-Index

console.clear()

function hIndex(citations: number[]): number {
  const beingCitatedAtLeast = Array(citations.length).fill(0)

  for (const citation of citations) {
    for (let i = 1; i <= Math.min(citation, citations.length); i++) {
      beingCitatedAtLeast[i - 1]++
    }
  }

  for (let i = citations.length; i >= 1; i--) {
    if (beingCitatedAtLeast[i - 1] >= i) {
      return i
    }
  }

  return 0
}

// console.log(hIndex([3, 0, 6, 1, 5]))
console.log(hIndex([1, 3, 1]))


