// 71. Simplify Path

console.clear()

enum Unit {
  NAME, SLASH, SINGLE_PERIOD, DOUBLE_PERIOD
}

function simplifyPath(path: string): string {
  const stack = ['/']

  const checkUnit = (string: string): Unit => {
    switch (string) {
      case '/': return Unit.SLASH
      case '.': return Unit.SINGLE_PERIOD
      case '..': return Unit.DOUBLE_PERIOD
      default: {
        if (string.includes('/')) {
          throw `出錯, ${string}`
        }

        return Unit.NAME
      }
    }
  }

  const handleSlash = (char: '/') => {
    const lastItem = stack.pop()
    const lastItemUnit = checkUnit(lastItem)

    switch (lastItemUnit) {
      case Unit.SINGLE_PERIOD:
      case Unit.DOUBLE_PERIOD:
      case Unit.NAME: {
        stack.push(lastItem, char)
        break
      }

      case Unit.SLASH: {
        stack.push(lastItem)
        break
      }
    }
  }

  const handlePeriod = (char: '.') => {
    const lastItem = stack.pop()
    const lastItemUnit = checkUnit(lastItem)

    switch (lastItemUnit) {
      case Unit.DOUBLE_PERIOD:
      case Unit.SINGLE_PERIOD:
      case Unit.NAME: {
        stack.push(lastItem + char)
        break
      }

      case Unit.SLASH: {
        stack.push(lastItem, char)
        break
      }
    }
  }

  const handleAlphabet = (char: string) => {
    const lastItem = stack.pop()
    const lastItemUnit = checkUnit(lastItem)

    switch (lastItemUnit) {
      case Unit.DOUBLE_PERIOD:
      case Unit.SINGLE_PERIOD:
      case Unit.NAME: {
        stack.push(lastItem + char)
        break
      }

      case Unit.SLASH: {
        stack.push(lastItem, char)
        break
      }
    }
  }

  for (const char of path.split('')) {
    switch (char) {
      case '/': {
        handleSlash(char)
        break
      }

      case '.': {
        handlePeriod(char)
        break
      }

      default: {
        handleAlphabet(char)
      }
    }
  }

  console.log('stack: ', stack)

  let levels = 0
  let result: string[] | string = []

  for (let i = 0; i < stack.length; i++) {
    const value = stack[i]
    const unit = checkUnit(value)

    switch (unit) {
      case Unit.NAME: {
        levels++
        result.push(value)
        break
      }

      case Unit.SLASH: {
        result.push(value)
        break
      }

      case Unit.SINGLE_PERIOD: {
        i++
        break
      }

      case Unit.DOUBLE_PERIOD: {
        if (levels > 0) {
          levels--
          result.pop()
          result.pop()
          i++
        } else {
          i++
        }

        break
      }
    }
  }


  if (result[result.length - 1] === '/') {
    result.pop()
  }

  if (!result.length) {
    result.push('/')
  }

  result = result.join('')
  console.log('result: ', result)

  return result
}

simplifyPath('/home/')
simplifyPath('/../')
simplifyPath('./home/foo/bar.jpg')
simplifyPath('/a/./b/../../c/')
simplifyPath('/a/../../b/../c//.//')
simplifyPath('/..hidden')

export {}
