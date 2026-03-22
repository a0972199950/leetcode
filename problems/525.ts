// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/

export {}
console.clear()

function findMaxLength(nums: (0 | 1)[]): number {
  // string: {(0|1)誰:number多了幾個}
  // number: length
  const prefixMap: Record<string, number> = {}

  let zeroCount = 0
  let oneCount = 0
  let maxLength = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const length = i + 1

    if (num === 0) {
      zeroCount++
    }

    if (num === 1) {
      oneCount++
    }

    if (zeroCount === oneCount) {
      maxLength = Math.max(maxLength, length)
      // console.log(prefixMap)
      continue
    }

    const diff = Math.abs(zeroCount - oneCount)
    let key = ''

    if (zeroCount > oneCount) {
      key = `{1:${diff}}`
      
    } else {
      key = `{0:${diff}}`
    }

    // console.log(`我需要 ${diff} 個 ${key[1]}, 我現在的長度是 ${length}, 當前表:`)
    // console.log(prefixMap)

    if (prefixMap[key]) {
      maxLength = Math.max(maxLength, length - prefixMap[key])
      // console.log(`找到需要的了, 它的長度是 ${prefixMap[key]}`)
    }

    // console.log('maxLength: ', maxLength)

    if (!prefixMap[key]) {
      prefixMap[key] = length
    }
    
  }

  return maxLength
}

console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0]))
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]))
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]))
