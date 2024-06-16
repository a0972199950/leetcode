// 28. Find the Index of the First Occurrence in a String

export {}
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

console.log(strStr('sadbutsad', 'sad'))
console.log(strStr('leetcode', 'leeto'))
console.log(strStr('mississippi', 'issip'))


