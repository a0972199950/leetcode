// 387. First Unique Character in a String

function firstUniqChar(s: string): number {
  if (s.length <= 1) {
    return 0
  }

  const checked: Record<string, boolean> = {}

  for (let i = 0; i < s.length; i++) {
    const target = s[i]

    if (checked[target]) {
      continue
    }

    for (let j = i + 1; j < s.length; j++) {
      const current = s[j]

      if (target === current) {
        checked[target] = true
        break
      }

      if (j === s.length - 1) {
        return i
      }
    }

    if (i === s.length - 1) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar('aabb'))

