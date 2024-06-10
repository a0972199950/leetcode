// 886. Possible Bipartition

console.clear()

// function possibleBipartition(n: number, dislikes: number[][]): boolean {
//   const dfs = (groupA: Set<number>, groupB: Set<number>, index: number) => {
//     if (index === dislikes.length) {
//       return true
//     }

//     const [x, y] = dislikes[index]

//     // 兩人在同一個 group
//     if (
//       (groupA.has(x) && groupA.has(y)) // 兩人在同一個 groupA
//       || (groupB.has(x) && groupB.has(y)) // 兩人在同一個 groupB
//     ) {
//       // 確定行不通
//       return false
//     }

//     // 兩人都不在任何 group
//     if (
//       (!groupA.has(x) && !groupA.has(y))
//       && (!groupB.has(x) && !groupB.has(y))
//     ) {
//       groupA.add(x)
//       groupB.add(y)
//       if (dfs(groupA, groupB, index + 1)) {
//         return true
//       }
      
//       groupA.delete(x)
//       groupB.delete(y)

//       groupA.add(y)
//       groupB.add(x)

//       if (dfs(groupA, groupB, index + 1)) {
//         return true
//       }

//       groupA.delete(y)
//       groupB.delete(x)

//       return false
//     }

//     // groupA 只有 x
//     if ((groupA.has(x) && !groupA.has(y))) {
//       groupB.add(y)

//       if (dfs(groupA, groupB, index + 1)) {
//         return true
//       }
      
//       groupB.delete(y)
//       return false
//     }

//     // groupA 只有 y
//     if ((groupA.has(y) && !groupA.has(x))) {
//       groupB.add(x)
      
//       if (dfs(groupA, groupB, index + 1)) {
//         return true
//       }
      
//       groupB.delete(x)
//       return false
//     }

//     // groupB 只有 x
//     if ((groupB.has(x) && !groupB.has(y))) {
//       groupA.add(y)

//       if (dfs(groupA, groupB, index + 1)) {
//         return true
//       }
      
//       groupA.delete(y)
//       return false
//     }

//     // groupB 只有 y
//     if ((groupB.has(y) && !groupB.has(x))) {
//       groupA.add(x)
      
//       if (dfs(groupA, groupB, index + 1)) {
//         return true
//       }
      
//       groupA.delete(x)
//       return false
//     }
    
//     throw new Error('出錯')
//   }

//   return dfs(new Set(), new Set(), 0)
// }

function possibleBipartition(n: number, dislikes: number[][]): boolean {
  if (n === 1 || !dislikes.length) {
    return true
  }

  const graph: Record<number, number[]> = {}

  for (const dislike of dislikes) {
    const [a, b] = dislike

    if (!graph[a]) {
      graph[a] = []
    }

    graph[a].push(b)

    if (!graph[b]) {
      graph[b] = []
    }

    graph[b].push(a)
  }

  const queue: number[] = []
  const colorMap: Record<number, 'RED' | 'BLUE'> = {}
  const history: Set<number> = new Set()

  const checkInHistory = (number: number) => {
    if (history.has(number)) {
      return true
    }

    history.add(number)
    return false
  }

  const tryDrawAndPush = (numbers: number[], color: 'RED' | 'BLUE') => {
    let canDraw = true

    for (const number of numbers) {
      if (!!colorMap[number] && colorMap[number] !== color) {
        canDraw = false
        break
      }

      colorMap[number] = color
      queue.push(number)
    }

    return canDraw
  }

  for (const target of Object.keys(graph).map(str => Number(str))) {
    queue.push(target)

    while (queue.length) {
      const target = queue.shift() as number
      const hates = graph[target]
  
      if (checkInHistory(target)) {
        continue
      }

      const color = colorMap[target] === 'RED' ? 'BLUE' : 'RED'

      if (!tryDrawAndPush(hates, color)) {
        return false
      }
    }
  }

  return true
}

console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])) // true
console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])) // false
console.log(possibleBipartition(7, [[1, 2], [3, 4], [1, 7], [4, 2], [5, 6]])) // true
console.log(possibleBipartition(1, [])) // true
console.log(possibleBipartition(2, [])) // true
console.log(possibleBipartition(5, [[1, 2], [3, 4], [4, 5], [3, 5]])) // false
// console.log(possibleBipartition(100, [[29, 50], [81, 93], [37, 82], [2, 84], [31, 44], [27, 68], [65, 100], [38, 86], [2, 78], [50, 84], [89, 94], [40, 66], [64, 88], [13, 58], [19, 91], [76, 88], [5, 84], [88, 98], [56, 75], [83, 85], [62, 97], [10, 75], [25, 49], [84, 95], [94, 98], [56, 58], [57, 59], [82, 92], [48, 77], [59, 61], [73, 91], [7, 44], [28, 87], [74, 89], [55, 71], [67, 89], [56, 82], [50, 56], [47, 64], [57, 90], [35, 70], [32, 58], [33, 59], [6, 32], [73, 92], [41, 43], [16, 51], [8, 25], [75, 76], [55, 92], [44, 68], [22, 74], [10, 71], [38, 97], [26, 34], [32, 49], [70, 98], [62, 95], [9, 81], [52, 81], [79, 91], [9, 59], [42, 43], [36, 37], [18, 48], [89, 91], [44, 56], [13, 25], [93, 95], [85, 98], [32, 82], [92, 99], [14, 38], [98, 100], [34, 50], [63, 78], [50, 59], [38, 84], [63, 84], [55, 82], [43, 49], [39, 47], [42, 70], [88, 100], [71, 72], [15, 44], [84, 89], [68, 100], [28, 31], [3, 48], [1, 54], [73, 89], [88, 95], [17, 37], [75, 95], [6, 65], [64, 81], [42, 65], [22, 94], [26, 54], [83, 92], [49, 69], [25, 56], [58, 86], [87, 98], [46, 58], [10, 90], [87, 88], [97, 98], [11, 74], [62, 90], [35, 63], [18, 29], [12, 43], [40, 75], [9, 26], [38, 50], [29, 56], [37, 97], [46, 61], [70, 78], [25, 43], [80, 100], [84, 85], [3, 62], [59, 77], [81, 88], [73, 75], [8, 60], [48, 83], [29, 47], [72, 89], [51, 73], [13, 35], [10, 24], [76, 93], [41, 69], [55, 77], [47, 80], [51, 59], [58, 66], [72, 86], [20, 37], [59, 66], [31, 97], [95, 97], [9, 34], [16, 35], [4, 78], [34, 42], [21, 31], [11, 52], [53, 76], [30, 70], [66, 94], [56, 79], [24, 56], [90, 100], [57, 88], [26, 50], [91, 96], [46, 49], [71, 96], [23, 49], [6, 11], [87, 93], [24, 77], [75, 81], [54, 77], [30, 64], [76, 83], [5, 89], [83, 94], [67, 99], [45, 67], [27, 48], [30, 31], [22, 33], [62, 88], [27, 86], [79, 94], [51, 66], [18, 53], [1, 98], [16, 70], [39, 53], [56, 93], [30, 44], [7, 76], [61, 92], [89, 98], [96, 99], [23, 71], [19, 31], [61, 83], [30, 40], [52, 93], [17, 21], [73, 83], [41, 58], [40, 65], [15, 31], [76, 95], [88, 97], [43, 77], [70, 71], [18, 89], [51, 61], [57, 82], [15, 35], [5, 25], [70, 89], [1, 41], [95, 99], [99, 100], [76, 98], [30, 53], [78, 88], [74, 88], [6, 66], [62, 63], [15, 100], [54, 98], [78, 100], [39, 65], [41, 86], [33, 81], [58, 75], [87, 97], [26, 48], [54, 55], [3, 52], [72, 73], [73, 93], [52, 73], [7, 42], [2, 14], [76, 77], [38, 63], [56, 88], [83, 96], [4, 10], [19, 50], [61, 88], [50, 85], [34, 58], [7, 35], [38, 92], [77, 84], [65, 82], [77, 82], [44, 81], [44, 66], [47, 87], [66, 72], [8, 75], [71, 80], [18, 92], [51, 54], [86, 97], [80, 88], [27, 33], [73, 79], [86, 91], [31, 47], [61, 75], [16, 32], [72, 93], [1, 71], [41, 56], [63, 85], [87, 100], [38, 41], [65, 77], [88, 99], [2, 24], [59, 96], [51, 63], [26, 55], [32, 78], [23, 52], [81, 85], [37, 90], [15, 82], [61, 68], [27, 92], [82, 98], [79, 84], [43, 55], [77, 94], [40, 80], [21, 89], [43, 68], [41, 84], [90, 96], [57, 89], [38, 43], [2, 13], [85, 95], [91, 100], [33, 73], [46, 53], [20, 40], [68, 98], [4, 43], [87, 89], [34, 71], [7, 14], [97, 99], [62, 85], [29, 87], [34, 59], [72, 81], [77, 87], [79, 97], [58, 80], [56, 64], [71, 85], [47, 57], [19, 26], [97, 100], [5, 19], [20, 29], [9, 14], [9, 58], [3, 76], [10, 49], [65, 87], [77, 80], [3, 82], [3, 60], [91, 92], [68, 74], [16, 80], [58, 91], [93, 94], [57, 77], [22, 60], [3, 36], [82, 96], [2, 91], [40, 63], [1, 69], [52, 71], [49, 67], [55, 75], [47, 94], [23, 98], [19, 66], [94, 95], [19, 40], [91, 97], [71, 97], [4, 46], [61, 62], [24, 76], [51, 84], [18, 35], [24, 62], [12, 45], [65, 68], [18, 61], [41, 90], [33, 85], [14, 49], [3, 12], [84, 97], [85, 93], [32, 71], [33, 79], [59, 81], [87, 91], [93, 100], [7, 8], [62, 91], [40, 45], [30, 32], [63, 69], [26, 73], [31, 67], [37, 60], [1, 99], [79, 99], [83, 100], [47, 74], [1, 5], [89, 99], [47, 59], [34, 92], [53, 55], [81, 95], [16, 45], [6, 48], [3, 78], [78, 80], [29, 72], [77, 78], [53, 66], [30, 92], [12, 23], [45, 63], [1, 30], [89, 100], [68, 82], [51, 58], [25, 51], [43, 96], [35, 95], [95, 96], [15, 81], [76, 97], [27, 91], [16, 36], [39, 91], [88, 91], [78, 91], [39, 40], [11, 13], [13, 15], [44, 83], [54, 80], [33, 82], [68, 89], [69, 85], [84, 100], [32, 66], [70, 83], [71, 99], [60, 68], [37, 70], [29, 90], [75, 80], [53, 84], [54, 66], [65, 90], [37, 49], [24, 58], [54, 100], [49, 54], [50, 53], [38, 99], [80, 96], [93, 98], [35, 83], [3, 58], [27, 41], [33, 62], [40, 53], [78, 79], [3, 81], [16, 71], [92, 97], [46, 64], [96, 100], [60, 90]]))



