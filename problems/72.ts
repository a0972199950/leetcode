// 72. Edit Distance

console.clear()

function minDistance(word1: string, word2: string): number {
  let min = Infinity

  const dfs = (i: number, j: number, ops: number) => {
    console.log(i, word1[i], j, word2[j], ops)

    if (i === word1.length && i === word2.length) {
      min = Math.min(min, ops)
      console.log('return', min)
      return
    }

    if (i === word1.length) {
      min = Math.min(min, word2.length - j + ops)
      console.log('return', min)
      return
    }

    if (j === word2.length) {
      min = Math.min(min, word1.length - i + ops)
      console.log('return', min)
      return
    }

    if (word1[i] === word2[j]) {
      dfs(i + 1, j + 1, ops)
      console.log('return', min)
      return
    }

    // insert
    dfs(i, j + 1, ops + 1)

    // delete
    dfs(i + 1, j, ops + 1)

    // replace
    dfs(i + 1, j + 1, ops + 1)
  }

  dfs(0, 0, 0)

  return min
}

// console.log(minDistance('horse', 'ros'))
// console.log(minDistance('intention', 'execution'))
console.log(minDistance('inten', 'execu'))
// console.log(minDistance('tion', 'tion'))
// console.log(minDistance('', 'a'))
// console.log(minDistance('dinitrophenylhydrazine', 'dimethylhydrazine'))

export {}
