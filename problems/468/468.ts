// 468. Validate IP Address
// 最後練習時間：2024-04-07
// https://leetcode.com/problems/validate-ip-address/

console.clear()

function validIPAddress(queryIP: string): 'IPv4' | 'IPv6' | 'Neither' {
  const isIpv4 = () => {
    const parts = queryIP.split('.')

    if (parts.length !== 4) {
      return false
    }

    return parts.every((part) => {
      const int = parseInt(part)

      return int <= 255
        && int >= 0
        && String(int) === part
        && /^\d+$/.test(part)
    })
  }

  const isIpv6 = () => {
    const parts = queryIP.split(':')

    if (parts.length !== 8) {
      return false
    }

    return parts.every((part) => {
      return part.length >=1
        && part.length <= 4
        && /^[\d,a-f,A-F]+$/.test(part)
    })
  }

  if (isIpv4()) {
    return 'IPv4'
  }
  else if (isIpv6()) {
    return 'IPv6'
  }
  else {
    return 'Neither'
  }
}

console.log(validIPAddress('172.16.254.1')) // IPv4
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334')) // IPv6
console.log(validIPAddress('256.256.256.256')) // Neither
console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334')) // IPv6
console.log(validIPAddress('2001:0db8:85a3::8A2E:037j:7334')) // Neither
console.log(validIPAddress('02001:0db8:85a3:0000:0000:8a2e:0370:7334')) // Neither

