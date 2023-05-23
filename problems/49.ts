// 49. Group Anagrams

console.clear()

function groupAnagrams(strs: string[]): string[][] {
  const results: Record<string, string[]> = {}

  const charCodePrefix = 'a'.charCodeAt(0)

  const generateStrKey = (str: string) => {
    const arr = Array(26).fill(0)

    for (let i = 0; i < str.length; i++) {
      arr[str[i].charCodeAt(0) - charCodePrefix]++
    }

    return arr.join(',')
  }

  for (const str of strs) {
    const key = generateStrKey(str)

    if (!results[key]) {
      results[key] = [str]
    } else {
      results[key].push(str)
    }
  }

  return Object.values(results)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['']))
console.log(groupAnagrams(['a']))

export {}