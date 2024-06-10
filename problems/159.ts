// 159. Longest Substring with At Most Two Distinct Characters

console.clear()

function lengthOfLongestSubstringTwoDistinct(s: string): number {
  let left = 0
  let right = 0
  const hash = { [s[0]]: 1 }

  let max = 1

  while (right < s.length - 1) {
    right++
    hash[s[right]] = ++hash[s[right]] || 1

    if (Object.keys(hash).length > 2) {
      if (hash[s[left]] === 1) {
        delete hash[s[left]]
      } else {
        hash[s[left]]--
      }

      left++
    }

    max = Math.max(max, right- left + 1)
  }

  return max
}

console.log(lengthOfLongestSubstringTwoDistinct('eceba'))
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb'))
console.log(lengthOfLongestSubstringTwoDistinct('a'))


