// 1631. Path With Minimum Effort
// 最後練習時間：2026-09-19
// https://leetcode.com/problems/path-with-minimum-effort/

console.clear()

// Time: O(4^mn)
// Space: O(mn)
// function minimumEffortPath(heights: number[][]): number {
//   const history: boolean[][] = Array.from({ length: heights.length }, () => Array(heights[0].length).fill(false))
//   let minEffort = Infinity

//   const dfs = (i: number, j: number, lastHeight: number, lastMaxEffort: number) => {
//     const height = heights[i]?.[j]
    
//     if (
//       height === undefined // 走到界外
//       || history[i][j] === true // 回到走過的路
//     ) {
//       return
//     }

//     const maxEffort = Math.max(lastMaxEffort, Math.abs(height - lastHeight))

//     // 走到終點
//     if (i === heights.length - 1 && j === heights[0].length - 1) {
//       minEffort = Math.min(minEffort, maxEffort)
//     }

//     history[i][j] = true

//     dfs(i - 1, j, height, maxEffort) // 上
//     dfs(i + 1, j, height, maxEffort) // 下
//     dfs(i, j - 1, height, maxEffort) // 左
//     dfs(i, j + 1, height, maxEffort) // 右

//     history[i][j] = false
//   }

//   dfs(0, 0, heights[0][0], 0)

//   return minEffort
// }

// Time: O(n + n + log max * n) => O(n log max)，max 為 heights 的任兩格相鄰的最大差值
// Space: O(n)
function minimumEffortPath(heights: number[][]): number {
  // 走過的路徑標記
  let history: boolean[][]
  let maxEffort = 0

  // 用 DFS 找出以 maxEffort 是否可以從起點走到終點
  const canReachGoalWithEffort = (i: number, j: number, lastHeight: number): boolean => {
    const height = heights[i]?.[j]

    if (
      height === undefined // 走到界外
      || history[i][j] === true // 回到走過的路
      || Math.abs(height - lastHeight) > maxEffort// 超過 maxEffort
    ) {
      // console.log('死了', [i, j], height, history[i]?.[j], Math.abs(height - lastHeight))
      return false
    }

    // 走到終點
    if (i === heights.length - 1 && j === heights[0].length - 1) {
      return true
    }

    history[i][j] = true

    // console.log([i, j], '繼續問')

    const canReach = canReachGoalWithEffort(i - 1, j, height) // 上
      || canReachGoalWithEffort(i + 1, j, height) // 下
      || canReachGoalWithEffort(i, j - 1, height) // 左
      || canReachGoalWithEffort(i, j + 1, height) // 右

    return canReach
  }

  // 找出二分的左右界 (最小可能 effort 到最大可能 effort)
  let left = 0
  let right = 0

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      const height = heights[i][j]

      const upEffort = Math.abs(height - (heights[i - 1]?.[j] ?? height))
      const downEffort = Math.abs(height - (heights[i + 1]?.[j] ?? height))
      const leftEffort = Math.abs(height - (heights[i]?.[j - 1] ?? height))
      const rightEffort = Math.abs(height - (heights[i]?.[j + 1] ?? height))

      right = Math.max(
        right,
        upEffort,
        downEffort,
        leftEffort,
        rightEffort
      )
    }
  }

  while (right > left) {
    maxEffort = Math.floor(left + (right - left) / 2)
    history = Array.from({ length: heights.length }, () => Array(heights[0].length).fill(false))

    if (canReachGoalWithEffort(0, 0, heights[0][0])) {
      right = maxEffort
    } else {
      left = maxEffort + 1
    }
  }

  return left
}

console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]])) // 2
console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]])) // 1
console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]])) // 0
console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]])) // 2
