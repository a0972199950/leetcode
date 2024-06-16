// 72. Edit Distance

export {}
console.clear()

function minDistance(word1: string, word2: string): number {
  let min = Infinity

  const dfs = (i: number, j: number, ops: number) => {
    if (i === word1.length && i === word2.length) {
      min = Math.min(min, ops)
      return
    }

    if (i === word1.length) {
      min = Math.min(min, word2.length - j + ops)
      return
    }

    if (j === word2.length) {
      min = Math.min(min, word1.length - i + ops)
      return
    }

    if (word1[i] === word2[j]) {
      dfs(i + 1, j + 1, ops)
      return
    }

    // insert
    dfs(i, j + 1, ops + 1)

    // delete
    dfs(i + 1, j, ops + 1)

    // replace
    dfs(i + 1, j + 1, ops + 1)

    console.log(min)
  }

  dfs(0, 0, 0)

  return min
}

// console.log(minDistance('horse', 'ros'))
// console.log(minDistance('intention', 'execution'))
// console.log(minDistance('inten', 'execu'))
// console.log(minDistance('tion', 'tion'))
// console.log(minDistance('', 'a'))
// console.log(minDistance('dinitrophenylhydrazine', 'dimethylhydrazine'))
console.log(minDistance('ab', 'bc'))


