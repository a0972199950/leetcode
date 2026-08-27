// 93. Restore IP Addresses
// 最後練習時間：2024-04-04
// https://leetcode.com/problems/restore-ip-addresses/

console.clear()

function restoreIpAddresses(s: string): string[] {
  if (s.length > 12) {
    return []
  }
  
  const ans = []

  const isValidPart = (str: string) => {
    return str.length <= 3
      && Number(str) <= 255
      && String(Number(str)) === str
  }

  const terverse = (str: string, parts: string[]) => {
    // console.log(str, parts)

    if (parts.length === 3) {
      if (isValidPart(str)) {
        ans.push([...parts, str].join('.'))
      }

      return
    }

    for (let length = 1; length <= 3; length++) {
      const currentStr = str.slice(0, length)

      if (isValidPart(currentStr)) {
        terverse(str.slice(length), [...parts, currentStr])
      }
    }
  }

  terverse(s, [])

  return ans
}

// console.log(restoreIpAddresses('25525511135'))
// console.log(restoreIpAddresses('0000'))
console.log(restoreIpAddresses('101023')) // Expected: [ '1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3' ]

