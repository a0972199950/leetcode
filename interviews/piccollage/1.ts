console.clear()

function findOutlier (str: string) {
  let odd = 0, even = 0
  const items = str.split(' ')

  const oddChecked: Set<number> = new Set()
  const evenChecked: Set<number> = new Set()

  const checkAndRecord = (num: number) => {
    if (num % 2 !== 0) {
      odd++
      oddChecked.add(num)
    } else {
      even++
      evenChecked.add(num)
    }
  }

  for (let i = 0; i < items.length; i++) {
    const num = Number(items[i])

    if (oddChecked.has(num)) {
      odd++
    } else if (evenChecked.has(num)) {
      even++
    } else {
      checkAndRecord(num)
    }

    if (odd && even) {
      if (num % 2 === Number(items[i + 1]) % 2) {
        return i
      } else {
        return i + 1
      }
    }
  }

  return -1
}

console.log(findOutlier('10 9 8 6 4 2')) // 2
console.log(findOutlier('7 9 1 6 3 5')) // 4
console.log(findOutlier('1 1 1 1 1 1 1 1')) // -1
console.log(findOutlier('2 4 6 8 10')) // -1
console.log(findOutlier('1 4 6 8 10')) // 1
console.log(findOutlier('2 4 6 8 1')) // 5

export default {}