// 28. Find the Index of the First Occurrence in a String
// 最後練習時間：2024-05-26
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

console.clear()

function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) {
      continue
    }

    if (haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }

  return -1
}

console.log(strStr('sadbutsad', 'sad')) // 0
console.log(strStr('leetcode', 'leeto')) // -1
console.log(strStr('mississippi', 'issip')) // 4

