// 567. Permutation in String

console.clear()

class SlideWindow {
  leftIndex: number | null = null
  rightIndex: number | null = null
  length: number
  
  constructor (length: number) {
    this.length = length
  }

  set (index: number) {
    this.leftIndex = this.rightIndex = index
  }

  reset () {
    this.leftIndex = this.rightIndex = null
  }

  increase () {
    this.rightIndex++
  }

  decrease () {
    this.leftIndex++
  }

  isFound () {
    if (this.leftIndex === null || this.rightIndex === null) {
      return false
    }
    return this.rightIndex - this.leftIndex + 1 === this.length
  }
}

class CharTable {
  data: Record<string, number> = {}

  constructor (s: string) {
    for (const char of s.split('')) {
      this.data[char] = ++this.data[char] || 1
    }
  }

  add (char: string) {
    this.data[char]++
  }

  remove (char: string) {
    this.data[char]--
  }
}

function checkInclusion(s1: string, s2: string): boolean {
  const charTable = new CharTable(s1)
  const slideWindow = new SlideWindow(s1.length)

  let index = 0


  const handleHit = () => {
    charTable.remove(s2[index])

    if (slideWindow.leftIndex === null) {
      slideWindow.set(index)
    }
    else {
      slideWindow.increase()
    }
    
    index++
  }

  const handleMiss = () => {
    if (slideWindow.leftIndex === null && slideWindow.rightIndex === null) {
      index++
    }
    else if (slideWindow.leftIndex === slideWindow.rightIndex) {
      charTable.add(s2[slideWindow.leftIndex])
      slideWindow.reset()
      index++
    }
    else {
      charTable.add(s2[slideWindow.leftIndex])
      slideWindow.decrease()
    }
  }

  while (index < s2.length) {
    const char = s2[index]

    if (charTable.data[char]) {
      handleHit()
    }
    else {
      handleMiss()
    }

    if (slideWindow.isFound()) {
      return true
    }
  }

  return false
}

console.log(checkInclusion('ab', 'eidbaooo')) // true
console.log(checkInclusion('ab', 'eidboaoo')) // false
console.log(checkInclusion('adc', 'dcda')) // true

export {}
