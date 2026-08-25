// 451. Sort Characters By Frequency
// 最後練習時間：2022-11-08
// https://leetcode.com/problems/sort-characters-by-frequency/

export {}
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

console.log(frequencySort('tree')) // Expected: eetr
console.log(frequencySort('cccaaa')) // Expected: cccaaa
console.log(frequencySort('Aabb')) // Expected: bbAa


