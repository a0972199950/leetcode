// quiz
// https://hackmd.io/@alan25sprout/S1Yjq9RUO

console.clear()

function teamSize (talent: number[], talentsCount: number): number[] {
  const result: number[] = []

  i_loop:
  for (let i = 0; i < talent.length; i++) {
    if (talent.length - i < talentsCount) {
      result.push(-1)
      continue
    }

    const pickedUniqueTalents: Set<number> = new Set()

    for (let j = i; j < talent.length; j++) {
      const t = talent[j]

      pickedUniqueTalents.add(t)

      if (pickedUniqueTalents.size === talentsCount) {
        result.push(j - i + 1)
        continue i_loop
      }
    }

    result.push(-1)
  }

  return result
}

console.log(teamSize([1, 2, 3, 2, 1], 3)) // [3, 4, 3, -1, -1]
console.log(teamSize([1, 1, 2, 2, 3, 1, 3, 2], 3)) // [5, 4,  4,  3, 4, 3, -1, -1]
console.log(teamSize([1, 1, 1, 1, 1], 1)) // [1, 1, 1, 1, 1]
console.log(teamSize([7, 5, 3, 4, 6, 1, 7, 2, 4], 7)) // [8, 7, -1, -1, -1, -1, -1, -1, -1]


