// 23
// (23)
// 23 or 23
// 23 and 23
// (23 or 23)
// 23 and (23 or 23)

export {}
console.clear()

const isValid = (s: string) => {
  let index = 0

  const extract = (): string | null | false => {
    let result = s[index]

    while (index < s.length) {
      if (result === ' ') {
        index++
        result = s[index]
        continue
      }
      else if (/^\d+$/.test(result)) {
        let nextIndex = index + 1

        while (/^\d+$/.test(s[nextIndex])) {
          result += s[nextIndex]
          nextIndex++
        }

        index = nextIndex
        return result
      }
      else if (result === '(' || result === ')') {
        index++
        return result
      }
      else if (result === 'a') {
        if (s[index + 1] !== 'n' || s[index + 2] !== 'd') {
          return false
        } else {
          index += 3
          return 'and'
        }
      } else if (result === 'o') {
        if (s[index + 1] !== 'r') {
          return false
        } else {
          index += 2
          return 'or'
        }
      } else {
        return false
      }
    }

    return null
  }

  class UnitHandler {
    private stack: string[]
    private unit: string

    getStack () {
      return this.stack
    }

    isNum (val: string) {
      return /^\d+$/.test(val)
    }

    isOperation (val: string) {
      return val === 'and' || val === 'or'
    }

    constructor (initialStack?: string[]) {
      this.stack = initialStack
    }

    set (unit: string) {
      this.unit = unit
      return this
    }

    deal () {
      if (this.isNum(this.unit)) {
        return this.dealWithNum()
      }
      else if (this.unit === '(') {
        return this.dealWithLeftBracket()
      }
      else if (this.unit === ')') {
        return this.dealWithRightBracket()
      }
      else if (this.isOperation(this.unit)) {
        return this.dealWithOperation()
      }
      else {
        return false
      }
    }

    private dealWithNum () {
      if (this.isNum(this.stack.at(-1))) {
        return false
      }
      else if (this.stack.at(-1) === '(') {
        this.stack.push(this.unit)
        return true
      }
      else if (this.stack.at(-1) === ')') {
        return false
      }
      else if (this.isOperation(this.stack.at(-1))) {
        if (this.isNum(this.stack.at(-2))) {
          this.stack.pop()
          this.stack.pop()
          return this.dealWithNum()
        }
      }
      else {
        this.stack.push(this.unit)
        return true
      }
    }

    private dealWithLeftBracket () {
      if (this.stack.at(-1) === ')') {
        return false
      }
      else {
        this.stack.push(this.unit)
        return true
      }
    }

    private dealWithRightBracket () {
      if (this.stack.at(-1) === '(') {
        this.stack.pop()
        return true
      }
      else if (this.isNum(this.stack.at(-1))) {
        if (this.stack.at(-2) === '(') {
          const num = this.stack.pop()
          this.stack.pop()
          this.unit = num
          return this.dealWithNum()
        }
        else {
          return false
        }
      }
      else {
        return false
      }
    }

    private dealWithOperation () {
      if (!this.isNum(this.stack.at(-1))) {
        return false
      }
      else {
        this.stack.push(this.unit)
        return true
      }
    }
  }

  const unitHandler = new UnitHandler([])

  while (index < s.length) {
    const unit = extract()

    if (unit === null) {
      continue
    }
    else if (unit === false) {
      return false
    }

    const canContinue = unitHandler.set(unit).deal()

    if (!canContinue) {
      return false
    }
  }

  const stack = unitHandler.getStack()

  // 最後檢查
  if (stack.length === 1 && unitHandler.isNum(stack[0])) {
    return true
  }
  else if (!stack.length) {
    return true
  }
  else {
    return false
  }
}

console.log(isValid('23'))
console.log(isValid('(23)'))
console.log(isValid('23 or 23'))
console.log(isValid('23 and 23'))
console.log(isValid('(23 or 23)'))
console.log(isValid('23 or 23 and 23'))
console.log(isValid('12 and (34 or 56)'))
console.log(isValid('12 and (34 or 56)     '))
console.log(isValid(''))
console.log(isValid(' '))
console.log(isValid('()'))

console.log('==========')

console.log(isValid('23())'))
console.log(isValid('((2333)'))
console.log(isValid('('))
console.log(isValid('23 ann 23'))
console.log(isValid('23 oa 23'))
console.log(isValid('23 p 23'))
console.log(isValid('23 and'))
console.log(isValid('23 or'))
console.log(isValid('23 or and 23'))
console.log(isValid('and'))
console.log(isValid('or'))
console.log(isValid(']'))
console.log(isValid(')('))

export default {}