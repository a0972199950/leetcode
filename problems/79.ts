// 79. Word Search

console.clear()

function exist(board: string[][], word: string): boolean {
  const rows = board.length
  const cols = board[0].length

  if (word.length > rows * cols) {
    return false
  }

  const doSearch = (row: number, col: number, index: number, checked: Set<string>) => {
    // 進入無限循環
    if (index > word.length) {
      throw `出錯，index: ${index}`
    }

    const positionHash = `${row},${col}`
    
    // 找到目標文字
    if (index === word.length) {
      return true
    }

    
    if (
      !board[row]?.[col] // 當下已遇到斷點
      || checked.has(positionHash) // 當前點已經遍歷過了
      || board[row][col] !== word[index] // 當前 key 不符合
    ) {
      return false
    }

    const result = doSearch(row - 1, col, index + 1, checked.add(positionHash)) // up
      || doSearch(row, col + 1, index + 1, checked.add(positionHash)) // right
      || doSearch(row + 1, col, index + 1, checked.add(positionHash)) // down
      || doSearch(row, col - 1, index + 1, checked.add(positionHash)) // left

    checked.delete(positionHash)

    return result
  }

  const checked = new Set<string>()

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const found = doSearch(row, col, 0, checked)

      if (found) {
        return true
      }
    }
  }

  return false
}

console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED')) // true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE')) // true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB')) // false
console.log(exist([['a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a']], 'aaaaaaaaaaaa')) // true
console.log(exist([['a', 'a', 'b', 'a', 'a', 'b'], ['a', 'a', 'b', 'b', 'b', 'a'], ['a', 'a', 'a', 'a', 'b', 'a'], ['b', 'a', 'b', 'b', 'a', 'b'], ['a', 'b', 'b', 'a', 'b', 'a'], ['b', 'a', 'a', 'a', 'a', 'b']], 'bbbaabbbbbab')) // false

export {}
