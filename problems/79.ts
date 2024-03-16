// 79. Word Search

console.clear()

// function exist(board: string[][], word: string): boolean {
//   const rows = board.length
//   const cols = board[0].length

//   if (word.length > rows * cols) {
//     return false
//   }

//   const doSearch = (row: number, col: number, index: number, checked: Set<string>) => {
//     // 進入無限循環
//     if (index > word.length) {
//       throw `出錯，index: ${index}`
//     }

//     const positionHash = `${row},${col}`
    
//     // 找到目標文字
//     if (index === word.length) {
//       return true
//     }

    
//     if (
//       !board[row]?.[col] // 當下已遇到斷點
//       || checked.has(positionHash) // 當前點已經遍歷過了
//       || board[row][col] !== word[index] // 當前 key 不符合
//     ) {
//       return false
//     }

//     const result = doSearch(row - 1, col, index + 1, checked.add(positionHash)) // up
//       || doSearch(row, col + 1, index + 1, checked.add(positionHash)) // right
//       || doSearch(row + 1, col, index + 1, checked.add(positionHash)) // down
//       || doSearch(row, col - 1, index + 1, checked.add(positionHash)) // left

//     checked.delete(positionHash)

//     return result
//   }

//   const checked = new Set<string>()

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       const found = doSearch(row, col, 0, checked)

//       if (found) {
//         return true
//       }
//     }
//   }

//   return false
// }

function exist(board: string[][], word: string): boolean {
  const startLetter = word[0]

  const matchAndExist = (i: number, j: number, word: string) => {
    // console.log('matchAndExist', i, j, `${word} === ${board[i]?.[j]} => ${word === board[i]?.[j]}`)
    if (
      (i > 0 && i < board.length)
      && (j > 0 && j < board[0].length)
      && board[i][j] === word
    ) {
      return true
    } else {
      return false
    }
  }

  const startMaze = (hasStepped: Set<string>, i: number, j: number, wordIndex: number): boolean => {
    console.log('startMaze', i, j, word[wordIndex])
    if (wordIndex === word.length - 1) {
      return true
    }

    hasStepped.add(`${i},${j}`)

    const nextWordIndex = wordIndex + 1
    const nextWord = word[nextWordIndex]

    if (
      (matchAndExist(i - 1, j, nextWord) && startMaze(hasStepped, i - 1, j, nextWordIndex + 1)) // 上
      || (matchAndExist(i, j + 1, nextWord) && startMaze(hasStepped, i, j + 1, nextWordIndex + 1)) // 右
      || (matchAndExist(i + 1, j, nextWord) && startMaze(hasStepped, i + 1, j, nextWordIndex + 1)) // 下
      || (matchAndExist(i, j - 1, nextWord) && startMaze(hasStepped, i, j - 1, nextWordIndex + 1)) // 左
    ) {
      return true
    } else {
      hasStepped.delete(`${i},${j}`)
      return false
    }
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== startLetter) {
        continue
      }

      // if (i === 2 && j === 0) {
      //   throw ''
      // }

      const found = startMaze(new Set(), i, j, 0)
      if (found) {
        return true
      }
    }
  }

  return false
}

console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED')) // true
// console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE')) // true
// console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB')) // false
// console.log(exist([['a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a']], 'aaaaaaaaaaaa')) // true
// console.log(exist([['a', 'a', 'b', 'a', 'a', 'b'], ['a', 'a', 'b', 'b', 'b', 'a'], ['a', 'a', 'a', 'a', 'b', 'a'], ['b', 'a', 'b', 'b', 'a', 'b'], ['a', 'b', 'b', 'a', 'b', 'a'], ['b', 'a', 'a', 'a', 'a', 'b']], 'bbbaabbbbbab')) // false

export {}
