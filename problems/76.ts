// 76. Minimum Window Substring

export {}
console.clear()

// Time: O(n) s.length + 2*t.length
// Space: O(1) 最多 26 個字母
function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return ''
  }

  // { {char}: {count} }
  const map: Record<string, number> = {}
  for (const char of t) {
    map[char] = (map[char] ?? 0) + 1
  }

  let left = 0
  let result = [-Infinity, Infinity]

  let matches = 0

  const updateResult = (left: number, right: number) => {
    const length = right - left + 1
    const resultLength = result[1] - result[0] + 1

    // console.log('更新 result: ', s.slice(result[0], result[1] + 1), '目標: ', s.slice(left, right + 1))
    if (length < resultLength) {
      result = [left, right]
    }
  }

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right]

    map[rightChar] = (map[rightChar] ?? 0) - 1

    if (map[rightChar] >= 0) {
      matches++
    }

    if (matches < t.length) {
      continue
    }

    // 已找到完整的 sub string, 但不一定是最短的。接下來要用 while 縮 left

    while (t.length === matches) {
      updateResult(left, right)

      const leftChar = s[left]

      map[leftChar] = (map[leftChar] ?? 0) + 1

      if (map[leftChar] > 0) {
        matches--
      }

      left++
    }
  }

  if (result[1] === Infinity) {
    return ''
  }

  return s.slice(result[0], result[1] + 1)
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
// console.log(minWindow('a', 'a'))
// console.log(minWindow('a', 'aa'))
// console.log(minWindow('ab', 'b'))
// console.log(minWindow('abc', 'bc'))
