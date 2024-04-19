// 165. Compare Version Numbers

console.clear()

function compareVersion(version1: string, version2: string): number {
  const revisions1 = version1.split('.')
  const revisions2 = version2.split('.')

  const compare = (revision1 = '0', revision2 = '0'): 1 | -1 | 0 => {
    const a = Number(revision1)
    const b = Number(revision2)

    if (a === b) {
      return 0
    } else if (a < b) {
      return -1
    } else {
      return 1
    }
  }

  for (let i = 0; i <= Math.max(revisions1.length, revisions2.length); i++) {
    const result = compare(revisions1[i], revisions2[i])

    if (result) {
      return result
    }
  }

  return 0
}

console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('1.0', '1.0.0'))
console.log(compareVersion('0.1', '1.1'))
console.log(compareVersion('1.2', '1.10'))
console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('3.0.4.10', '3.0.4.2'))

export {}
