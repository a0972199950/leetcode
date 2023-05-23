function isValidSudoku(board: string[][]): boolean {
  let rows, cols, subs

  rows = Array.from(Array(9)).reduce((result, item, index) => {
    result[index] = {}
    return result
  }, {} as Record<string, any>)

  cols = Array.from(Array(9)).reduce((result, item, index) => {
    result[index] = {}
    return result
  }, {} as Record<string, any>)

  subs = Array.from(Array(9)).reduce((result, item, index) => {
    const x = index % 3 + 1
    const y = Math.floor(index / 3) + 1
    result[`${x}-${y}`] = {}
    return result
  }, {} as Record<string, any>)


  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j]

      if (val === '.') {
        continue
      }

      if (rows[i][val]) {
        return false
      } else {
        rows[i][val] = true
      }

      if (cols[j][val]) {
        return false
      } else {
        cols[j][val] = true
      }

      const x = Math.floor(j / 3) + 1
      const y = Math.floor(i / 3) + 1

      if (subs[`${x}-${y}`][val]) {
        return false
      } else {
        subs[`${x}-${y}`][val] = true
      }
    }
  }

  return true
};

console.log(isValidSudoku(
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]
))

export {}