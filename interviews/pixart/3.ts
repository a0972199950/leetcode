console.clear()

const solution = (json: string) => {
  json = json.replaceAll(' ', '')

  if (!json) {
    return false
  }

  let i = 0

  const parseString = () => {
    if (json[i] !== '"') {
      return false
    }

    do {
      i++
    }
    while (json[i] !== '"' && i < json.length)

    i++
    return true
  }

  const parseNumber = () => {
    if (!/\d/.test(json[i])) {
      return false
    }

    do {
      i++
    } while (/\d/.test(json[i]) && i < json.length)

    return true
  }

  const parseTemplate = (word: string) => {
    let j = 0

    for (j = 0; j < word.length; j++) {
      if (json[i + j] !== word[j]) {
        return false
      }
    }

    i += j
    return true
  }

  const parseArray = () => {
    if (json[i] !== '[') {
      return false
    }

    i++

    while (json[i] !== ']' && i < json.length) {
      const result = parseValue()

      if (!result) {
        return false
      }

      if (json[i] === ']') {
        continue
      } else if (json[i] === ',') {
        i++
      } else {
        return false
      }
    }

    i++
    return true
  }

  const parseObject = () => {
    if (json[i] !== '{') {
      return false
    }

    i++

    while (json[i] !== '}' && i < json.length) {
      do {
        if (json[i] === ',') {
          i++
        }

        const isKey = parseString() && json[i] === ':'

        if (!isKey) {
          return false
        }

        i++
        const isValue = parseValue()

        if (!isValue) {
          return false
        }

      } while (json[i] === ',' && i < json.length)

    }

    i++
    return true
  }

  const parseValue = () => {
    const char = json[i]

    if (char === '"') {
      return parseString()
    }

    if (/\d/.test(char)) {
      return parseNumber()
    }

    if (char === 'n') {
      return parseTemplate('null')
    }

    if (char === 't') {
      return parseTemplate('true')
    }

    if (char === 'f') {
      return parseTemplate('false')
    }

    if (char === '[') {
      return parseArray()
    }

    if (char === '{') {
      return parseObject()
    }

    return false
  }

  const result = parseValue()

  if ((i === json.length) && result) {
    return true
  } else {
    return false
  }
}

console.log(solution('"aaa"'))
console.log(solution('123'))
console.log(solution('null'))
console.log(solution('true'))
console.log(solution('false'))
console.log(solution('["aaa", 123, null, true, false, { "a": "aaa" }]'))
console.log(solution('{"key1":"aaa","key2":123,"key3":true,"key4":false,"key5":null, "key6": [123, 456]}'))

console.log(solution('"aaa'))
console.log(solution('123"'))
console.log(solution('null3'))
console.log(solution('trues'))
console.log(solution('false2'))
console.log(solution('["aaa" 123, null, true, false, { "a": "aaa" }]'))
console.log(solution('{"key1":"aaa","key2":123,key3:true,"key4":false,"key5":null, "key6": [123, 456]}'))

export default ''
