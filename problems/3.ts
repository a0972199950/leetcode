// 3. Longest Substring Without Repeating Characters

console.clear()

function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let right = 0
  let max = 0
  const record = new Set<string>()

  while (right < s.length) {
    if (record.has(s[right])) {
      while (left <= right && record.has(s[right])) {
        record.delete(s[left])
        left++
      }
    }

    record.add(s[right])
    max = Math.max(max, right - left + 1)
    right++
  }

  return max
}

lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring('')

export {}