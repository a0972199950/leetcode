// 763. Partition Labels
// https://leetcode.com/problems/partition-labels/

export {}
console.clear()

interface Part {
  chars: Set<string>
  start: number
  end: number
}

// function partitionLabels(s: string): number[] {
//   const parts: Part[] = []

//   s_loop:
//   for (let sIndex = 0; sIndex < s.length; sIndex++) {
//     const char = s[sIndex]

//     for (let pIndex = 0; pIndex < parts.length; pIndex++) {
//       const part = parts[pIndex]

//       if (part.chars.has(char)) {
//         const rest = parts.splice(pIndex + 1)

//         part.chars = new Set<string>([
//           ...part.chars,
//           ...rest.reduce((sum, { chars }) => [...sum, ...chars], [])
//         ])

//         part.end = sIndex
//         continue s_loop
//       }
//     }

//     parts.push({
//       chars: new Set<string>().add(char),
//       start: sIndex,
//       end: sIndex
//     })
//   }

//   return parts.map(({ start, end }) => end - start + 1)
// }

// Time: O(n)
// Space: O(n)
// function partitionLabels(s: string): number[] {
//   // { char: stack 第幾個位置 }
//   const record: Map<string, number> = new Map()
//   const stack: number[] = []

//   for (const char of s) {
//     if (!record.has(char)) {
//       record.set(char, stack.length)
//       stack.push(1)
//       continue
//     }

//     let sum = 1

//     for (let i = stack.length - 1; i >= record.get(char); i--) {
//       sum += stack.pop()
//     }

//     // Time: O(1): 最多 26 個字母
//     record.forEach((value, key) => {
//       if (value >= record.get(char)) {
//         record.set(key, record.get(char))
//       }
//     })
//     // console.log(char, 'toBeMarged: ', toBeMarged)
//     stack.push(sum)
//   }

//   // console.log(stack)
//   return stack
// }

// Time: O(n)
// Space: O(1)
function partitionLabels(s: string): number[] {
  // { char: 字元最後出現的位置 }
  const record: Map<string, number> = new Map()
  for (let i = 0; i < s.length; i++) {
    record.set(s[i], i)
  }

  // console.log(record)
  
  let start = 0
  let end = 0

  const result = []
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    end = Math.max(end, record.get(char))

    if (i === end) {
      result.push(end - start + 1)
      start = i + 1
    }
    
  }

  return result
}

console.log(partitionLabels('ababcc'))
console.log(partitionLabels('ababcbacadefegdehijhklij'))
console.log(partitionLabels('eccbbbbdec'))
console.log(partitionLabels('abcd'))
console.log(partitionLabels('aaaa'))

