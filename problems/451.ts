// 451. Sort Characters By Frequency

console.clear()

function frequencySort(s: string): string {
  const record = s.split('').reduce((sum, char) => {
    sum[char] = ++sum[char] || 1
    return sum
  }, {})

  return Object
    .keys(record)
    .sort((keyA, keyB) => record[keyB] - record[keyA])
    .reduce((sum, char) => sum + Array(record[char]).fill(char).join(''), '')
}

console.log(frequencySort('tree'))
console.log(frequencySort('cccaaa'))
console.log(frequencySort('Aabb'))

export {}
