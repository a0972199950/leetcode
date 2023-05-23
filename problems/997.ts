// 997. Find the Town Judge

console.clear()

function findJudge(n: number, trust: number[][]): number {
  let maxBeingTrusted = -1
  const beingTrustedMap = {}
  const personWhoTrustSomeone = new Set<number>()

  for (const edge of trust) {
    const [trustMember, target] = edge

    personWhoTrustSomeone.add(trustMember)

    if (beingTrustedMap[target]) {
      beingTrustedMap[target].add(trustMember)
    } else {
      beingTrustedMap[target] = new Set<number>().add(trustMember)
    }

    if (maxBeingTrusted === -1 || beingTrustedMap[maxBeingTrusted].size < beingTrustedMap[target].size) {
      maxBeingTrusted = target
    }
  }

  // console.log(beingTrustedMap)
  // console.log(personWhoTrustSomeone)
  // console.log(maxBeingTrusted)

  if (maxBeingTrusted === -1) {
    return n === 1 ? 1 : -1
  } else {
    if (beingTrustedMap[maxBeingTrusted]?.size === n - 1 && !personWhoTrustSomeone.has(maxBeingTrusted)) {
      return maxBeingTrusted
    } else {
      return -1
    }
  }
}

console.log(findJudge(1, []))
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]))
console.log(findJudge(3, [[1, 3], [2, 3]]))

export {}