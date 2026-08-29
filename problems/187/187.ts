// 187. Repeated DNA Sequences
// 最後練習時間：2022-10-27
// https://leetcode.com/problems/repeated-dna-sequences/

console.clear()

function findRepeatedDnaSequences(s: string): string[] {
  const seens = new Set<string>()
  const results = new Set<string>()

  for (let i = 0; i < s.length - 9; i++) {
    const str = s.slice(i, i + 10)

    if (seens.has(str)) {
      results.add(str)
    } else {
      seens.add(str)
    }
  }

  return [...results]
}

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')) // [ 'AAAAACCCCC', 'CCCCCAAAAA' ]
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA')) // [ 'AAAAAAAAAA' ]
console.log(findRepeatedDnaSequences('AAAAAAAAAAA')) // [ 'AAAAAAAAAA' ]

