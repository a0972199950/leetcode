export {}
console.clear()

// s1: 'ab', s2: 'ac'
// s3: 'abac []', 'acab', 'aabc' => true


// s3: 'aab', 沒用到 c
// 'abca',  => false

const fn = (s1: string, s2: string, s3: string): boolean => {
  if (s1.length + s2.length !== s3.length) {
    return false
  }

  let result = false

  const cache: Set<string> = new Set() // ab,ac | a,ac

  const dfs = (index: number, remainS1: string, remainS2: string) => {
    const key = [remainS1, remainS2].join(',')

    if (cache.has(key)) {
      return false
    }

    if (result) {
      return true
    }

    if (index === s3.length) {
      result = true
      return true
    }

    const char = s3[index]
    const remainS3 = s3.substring(index)

    // 只剩下 s1/s2, 且剩下的字串與剩下的 s3 相同
    if ((!remainS1 && remainS3 === remainS2) || !remainS2 && remainS1 === remainS3) {
      result = true
      return true
    }

    // 只剩下 s1/s2, 但剩下的字串與剩下的 s3 不同
    if ((!remainS1 && remainS3 !== remainS2) || !remainS2 && remainS1 !== remainS3) {
      cache.add(key)
      return false
    }

    if (remainS1[0] === char) {
      dfs(index + 1, remainS1.substring(1), remainS2)
    }

    if (remainS2[0] === char) {
      dfs(index + 1, remainS1, remainS2.substring(1))
    }
  }

  dfs(0, s1, s2)

  return result
}

console.log(fn('ab', 'ac', 'abac'))
console.log(fn('ab', 'ac', 'acab'))
console.log(fn('ab', 'ac', 'aabc'))

console.log(fn('ab', 'ac', 'aab'))
console.log(fn('ab', 'ac', 'abca'))

