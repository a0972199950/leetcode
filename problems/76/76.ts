// 76. Minimum Window Substring
// 最後練習時間：2026-09-13

console.clear()

// Time: O(n) s.length + 2*t.length
// Space: O(1) 最多 26 個字母
// function minWindow(s: string, t: string): string {
//   if (t.length > s.length) {
//     return ''
//   }

//   // { {char}: {count} }
//   const map: Record<string, number> = {}
//   for (const char of t) {
//     map[char] = (map[char] ?? 0) + 1
//   }

//   let left = 0
//   let result = [-Infinity, Infinity]

//   let matches = 0

//   const updateResult = (left: number, right: number) => {
//     const length = right - left + 1
//     const resultLength = result[1] - result[0] + 1

//     // console.log('更新 result: ', s.slice(result[0], result[1] + 1), '目標: ', s.slice(left, right + 1))
//     if (length < resultLength) {
//       result = [left, right]
//     }
//   }

//   for (let right = 0; right < s.length; right++) {
//     const rightChar = s[right]

//     map[rightChar] = (map[rightChar] ?? 0) - 1

//     if (map[rightChar] >= 0) {
//       matches++
//     }

//     if (matches < t.length) {
//       continue
//     }

//     // 已找到完整的 sub string, 但不一定是最短的。接下來要用 while 縮 left

//     while (t.length === matches) {
//       updateResult(left, right)

//       const leftChar = s[left]

//       map[leftChar] = (map[leftChar] ?? 0) + 1

//       if (map[leftChar] > 0) {
//         matches--
//       }

//       left++
//     }
//   }

//   if (result[1] === Infinity) {
//     return ''
//   }

//   return s.slice(result[0], result[1] + 1)
// }

// Time: O(n)
// Space: O(1)
function minWindow(s: string, t: string): string {
  const countLength = 'z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1 // 只要放得下所有可能字元 charCode 就好。不從0開始，或是中間有空格都沒關係
  const tCount: number[] = Array(countLength).fill(0)
  let matches = countLength
  const types = new Set()

  const getCharCode = (c: string) => {
    return c.charCodeAt(0) - 'A'.charCodeAt(0)
  }

  for (const c of t) {
    types.add(c)
    tCount[getCharCode(c)]++

    // 第一次把一個 0 改成 1，所以要扣除一個 matches 的初始狀態
    if (tCount[getCharCode(c)] === 1) {
      matches--
    }
  }

  let range = [0, -1]
  let minLength = Infinity
  let left = 0
  const sCount = Array(countLength).fill(0)

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right]

    if (types.has(rightChar)) {
      if (sCount[getCharCode(rightChar)] >= tCount[getCharCode(rightChar)]) {
        matches--
      }

      sCount[getCharCode(rightChar)]++

      if (sCount[getCharCode(rightChar)] >= tCount[getCharCode(rightChar)]) {
        matches++
      }
    }

    // console.log(rightChar, matches, countLength, [left, right])

    // 符合條件，設定答案後嘗試縮小到不符合條件
    while (matches === countLength) {
      const length = right - left + 1

      if (length < minLength) {
        minLength = length
        range = [left, right]
      }

      const leftChar = s[left]

      if (types.has(leftChar)) {
        if (sCount[getCharCode(leftChar)] >= tCount[getCharCode(leftChar)]) {
          matches--
        }

        sCount[getCharCode(leftChar)]--

        if (sCount[getCharCode(leftChar)] >= tCount[getCharCode(leftChar)]) {
          matches++
        }
      }

      left++
    }

    // 不符合條件，right + 1 下一輪
  }

  return s.slice(range[0], range[1] + 1)
}

console.log(minWindow('ADOBECODEBANC', 'ABC')) // BANC
console.log(minWindow('a', 'a')) // 'a'
console.log(minWindow('a', 'aa')) // ''
console.log(minWindow('AfsdkfsjlaB', 'AB')) // 'AfsdkfsjlaB'
console.log(minWindow('abc', 'bc')) // 'bc'
console.log(minWindow('zoo', 'z')) // 'z'
console.log(minWindow('gehzduwqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiesscmigicfzn', 'qsvczwsslkhwg')) // 'wqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiess'
