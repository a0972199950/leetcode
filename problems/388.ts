// 388. Longest Absolute File Path

console.clear()

interface Next {
  val: string
  layer: number
}

function lengthLongestPath(input: string): number {
  const stack: string[] = []
  let index = 0
  let maxLength = 0

  const findNext = (): Next => {
    let val = ''
    let layer = 0

    while (index < input.length) {
      const char = input[index]
      console.log('char: ', char)

      index++

      if (char === '\t') {
        layer++
      }

      if (char === '\n') {
        break
      }

      if (char !== '\n' && char !== '\t') {
        val += char
      }
    }

    console.log({ val, layer })
    return { val, layer }
  }

  const isLeaf = () => {
    return stack[stack.length - 1].includes('.')
  }

  while (index < input.length) {
    const { val, layer: nextLayer } = findNext()
    const currentLayer = stack.length

    if (nextLayer - currentLayer === 0) {
      stack.push(val)
      
      if (isLeaf()) {
        maxLength = Math.max(maxLength, stack.join('/').length)
      }
    }
    else if (nextLayer - currentLayer < 0) {
      stack.splice(nextLayer, Infinity)
      stack.push(val)

      if (isLeaf()) {
        maxLength = Math.max(maxLength, stack.join('/').length)
      }
    }
    else {
      throw `input invalid, currentLayer: ${currentLayer}, nextLayer: ${nextLayer}`
    }

    console.log('stack: ', stack)
  }

  return maxLength
}

console.warn(lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'))
console.warn(lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'))
console.warn(lengthLongestPath('a'))


