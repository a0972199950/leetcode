// 844. Backspace String Compare

function backspaceCompare(s: string, t: string): boolean {
  let sIndex = s.length - 1
  let tIndex = t.length - 1

  while (sIndex >= 0 && tIndex >= 0) {
    let sChar = ''
    let tChar = ''

    while (s[sIndex] === '#' && sIndex >= 0) {
      let backSpace = 1

      while (backSpace > 0 && sIndex >= 0) {
        sIndex--

        if (s[sIndex] !== '#') {
          backSpace--
        } else {
          backSpace++
        }
      }

      sIndex >= 0 && (sIndex--)
    }

    sChar = s[sIndex] || ''

    while (t[tIndex] === '#' && tIndex >= 0) {
      let backSpace = 1

      while (backSpace > 0 && tIndex >= 0) {
        tIndex--

        if (t[tIndex] !== '#') {
          backSpace--
        } else {
          backSpace++
        }
      }

      tIndex >= 0 && (tIndex--)
    }

    console.log(tIndex)

    tChar = t[tIndex] || ''

    console.log(sChar, tChar)

    if (sChar !== tChar) {
      return false
    } else {
      sIndex >= 0 && (sIndex--)
      tIndex >= 0 && (tIndex--)
    }
  }

  console.log(sIndex, tIndex)
  return sIndex === tIndex
};

console.log(backspaceCompare('y#fo##f', 'y#f#o##f'))

export {}
