// json-parse. 

export {}
console.clear()

const myJsonParse = (str: string) => {
  let index = 0

  const skipWhitespace = () => {
    while (/\s/.test(str[index])) {
      index++
    }
  }

  const parse = () => {
    // number
    const parseNumber = (): number => {
      let result = ''

      if (!/\d/.test(str[index]) && str[index] !== '-') {
        throw new Error()
      }

      while (/\d/.test(str[index]) || str[index] === '-' ||  str[index] === '.') {
        result += str[index]
        index++
      }

      if (Number.isNaN(Number(result))) {
        throw new Error()
      }

      return Number(result)
    }

    // string
    const parseString = (): string => {
      let result = ''

      if (str[index] !== '"') {
        throw new Error()
      }

      index++
    
      while (str[index] !== '"') {
        if (str[index] === '\\') {
          index += 1
          result += str[index]
          index++
          continue
        }

        result += str[index]
        index++
      }

      index++
      return result
    }

    // boolean
    const parseBoolean = (): boolean => {
      let result

      if (!['t', 'f'].includes(str[index])) {
        throw new Error()
      }

      if (str[index] === 't') {
        result = true
        index += 4
      } else if (str[index] === 'f') {
        result = false
        index += 5
      }

      return Boolean(result)
    }

    // null
    const parseNull = (): null => {
      if (str[index] !== 'n') {
        throw new Error()
      }

      index += 4
      return null
    }

    // array
    const parseArray = (): Array<any> => {
      const result = []

      if (str[index] !== '[') {
        throw new Error()
      }

      index++
      while (str[index] !== ']') {
        skipWhitespace()

        if (str[index] === ',') {
          index++
          continue
        }

        const value = parse()
        result.push(value)
      }

      index++
      return result
    }

    // object
    const parseObject = (): Record<string, any> => {
      const result = {}

      if (str[index] !== '{') {
        throw new Error()
      }

      index++
      while (str[index] !== '}') {
        skipWhitespace()
        const key = parseString()

        if (str[index] !== ':') {
          throw new Error()
        }
        index++

        skipWhitespace()
        const value = parse()
        result[key] = value

        if (str[index] === ',') {
          index++
        }
      }

      index++
      return result
    }

    if (/\d/.test(str[index]) || str[index] === '-') {
      return parseNumber()
    }
    else if (str[index] === '"') {
      return parseString()
    }
    else if (['t', 'f'].includes(str[index])) {
      return parseBoolean()
    }
    else if (str[index] === 'n') {
      return parseNull()
    }
    else if (str[index] === '[') {
      return parseArray()
    }
    else if (str[index] === '{') {
      return parseObject()
    }
    else {
      throw new Error()
    }
  }

  const result = parse()
  return result
}

// 基本型別
console.log(myJsonParse('42'))              // 42
console.log(myJsonParse('-3.14'))           // -3.14
console.log(myJsonParse('"hello"'))         // 'hello'
console.log(myJsonParse('true'))            // true
console.log(myJsonParse('false'))           // false
console.log(myJsonParse('null'))            // null

// 陣列
console.log(myJsonParse('[1, 2, 3]'))       // [1, 2, 3]
console.log(myJsonParse('[]'))              // []
console.log(myJsonParse('[1, [2, [3]]]'))   // [1, [2, [3]]]

// 物件
console.log(myJsonParse('{"a": 1}'))        // { a: 1 }
console.log(myJsonParse('{}'))              // {}
console.log(myJsonParse('{"a": {"b": {"c": 3}}}')) 

// 混合巢狀
console.log(myJsonParse('{"list": [1, "two", null, true], "nested": {"x": 10}}'))
console.log(myJsonParse('[{"a":1}, 2]'))

// 跳脫字元
console.log(myJsonParse('"say \\"hi\\""'))  // 'say "hi"'
