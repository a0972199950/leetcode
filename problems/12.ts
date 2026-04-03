// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/

export {}
console.clear()

// function intToRoman(num: number): string {
//   const romans: [string, number][] = [
//     ['M', 1000], ['CM', 900],
//     ['D', 500],  ['CD', 400],
//     ['C', 100],  ['XC', 90],
//     ['L', 50],   ['XL', 40],
//     ['X', 10],   ['IX', 9],
//     ['V', 5],    ['IV', 4],
//     ['I', 1]
//   ]

//   let result = ''

//   for (const sub of [1000, 100, 10, 1]) {
//     let remain = Math.floor(num / sub) * sub
//     num %= sub

//     if (!remain) {
//       continue
//     }

//     for (const [symbol, value] of romans) {
//       const count = Math.floor(remain / value)

//       if (!count) {
//         continue
//       }

//       result += Array(count).fill(symbol).join('')

//       remain %= value
//       if (!remain) {
//         break
//       }
//     }
//   }

//   return result
// }

// Time: O(1)
// Space: O(1)
function intToRoman(_num: number): string {
  const s = String(_num)
  let result = ''

  const map = {
    [1000]: 'M',

    [500]: 'D',
    [900]: 'CM',
    [400]: 'CD',
    [100]: 'C',

    [50]: 'L',
    [90]: 'XC',
    [40]: 'XL',
    [10]: 'X',

    [5]: 'V',
    [9]: 'IX',
    [4]: 'IV',
    [1]: 'I'
  }

  for (let i = 0; i < s.length; i++) {
    const num = Number(s[i]) * (10 ** (s.length - i - 1))
    // console.log('num:', num)

    if (map[num]) {
      result += map[num]
      continue
    }

    const j = 10 ** (s.length - i - 1)
    const divideResult = num / j
  
    if (num < 5 * j) {
      result += map[j].repeat(divideResult)
    } else {
      result += (map[5 * j] + map[j].repeat(divideResult - 5))
    }

  }

  return result
}

// AI 寫的，不是我想到的
// Time: O(1)
// Space: O(1)
function intToRoman(num: number): string {
  const romans: [number, string][] = [
    [1000, 'M'], [900, 'CM'],
    [500, 'D'],  [400, 'CD'],
    [100, 'C'],  [90, 'XC'],
    [50, 'L'],   [40, 'XL'],
    [10, 'X'],   [9, 'IX'],
    [5, 'V'],    [4, 'IV'],
    [1, 'I']
  ]

  let result = ''

  for (const [value, symbol] of romans) {
    while (num >= value) {
      result += symbol
      num -= value
    }
  }

  return result
}

console.log(intToRoman(9))
console.log(intToRoman(13))
console.log(intToRoman(3749))
console.log(intToRoman(58))
console.log(intToRoman(1994))

