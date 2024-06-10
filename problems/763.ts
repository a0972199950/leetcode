// 763. Partition Labels

console.clear()

interface Part {
  chars: Set<string>
  start: number
  end: number
}

function partitionLabels(s: string): number[] {
  const parts: Part[] = []

  s_loop:
  for (let sIndex = 0; sIndex < s.length; sIndex++) {
    const char = s[sIndex]

    for (let pIndex = 0; pIndex < parts.length; pIndex++) {
      const part = parts[pIndex]

      if (part.chars.has(char)) {
        const rest = parts.splice(pIndex + 1)

        part.chars = new Set<string>([
          ...part.chars,
          ...rest.reduce((sum, { chars }) => [...sum, ...chars], [])
        ])

        part.end = sIndex
        continue s_loop
      }
    }

    parts.push({
      chars: new Set<string>().add(char),
      start: sIndex,
      end: sIndex
    })
  }

  return parts.map(({ start, end }) => end - start + 1)
}

// partitionLabels('abcad')
// console.log(partitionLabels('ababcbacadefegdehijhklij'))
// console.log(partitionLabels('eccbbbbdec'))
console.log(partitionLabels('abcd'))
console.log(partitionLabels('aaaa'))
console.log(partitionLabels(''))



