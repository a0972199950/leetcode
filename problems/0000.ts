export {}
console.clear()

function findType(input: any): string {
  if (Array.isArray(input)) {
    return 'array'
  } else {
    return typeof input
  }
}

const isPureType = (input: any) => {
  if (['number', 'string', 'boolean', 'undefined'].includes(findType(input))) {
    return true
  } else {
    return false
  }
}

/* @description return if the "value" of a and b are equal */
function fastEqual(a: any, b: any): boolean {
  if (findType(a) !== findType(b)) {
    return false
  }

  if (isPureType(a)) {
    return String(a) === String(b)
  }

  if (findType(a) === 'array') {
    if (a.length !== b.length) {
      return false
    }

    return a.every((item, index) => {
      return fastEqual(item, b[index]) 
    })
  }

  if (findType(a) === 'object') {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if (keysA.length !== keysB.length) {
      return false
    }

    return keysA.every((key) => {
      return fastEqual(a[key], b[key])
    })
  }
}

console.log(fastEqual(1, 1)) // => true
console.log(fastEqual(1, 2)) // => false
console.log(fastEqual(1, '1')) // => false

console.log(fastEqual([], [])) // => true
console.log(fastEqual({ a: 1, b: 2 }, { b: 2, a: 1 })) // => true
console.log(fastEqual({ foo: { bar: [], zig: 1 } }, { foo: { bar: [], zig: 1 } })) // => true
console.log(fastEqual({ foo: { bar: [], zig: 1 } }, { foo: { bar: [], zig: 1, zag: 1 } })) // => false

export default ''
