// 211. Design Add and Search Words Data Structure

console.clear()

class Node {
  public left: Node | null = null

  public right: Node | null = null

  constructor (
    public val: string
  ) {}
}

enum COMPARE_RESULT {
  SMALLER, BIGGER, EQUAL
}

class WordDictionary {
  root: Node | null = null

  _compareNodeWeight (targetNode: Node, currentNode: Node): COMPARE_RESULT {
    if (targetNode.val === currentNode.val) {
      return COMPARE_RESULT.EQUAL
    }

    for (let i = 0; i < Math.min(targetNode.val.length, currentNode.val.length); i++) {
      const targetChar = targetNode.val[i]
      const currentChar = currentNode.val[i]

      if (targetChar === '.' || currentChar === '.') {
        continue
      }

      const targetCharWeight = !targetChar ? -Infinity : targetChar.charCodeAt(0)
      const currentCharWeight = !currentChar ? -Infinity : currentChar.charCodeAt(0)

      if (targetCharWeight === currentCharWeight) {
        continue
      }
      else if (targetCharWeight > currentCharWeight) {
        return COMPARE_RESULT.BIGGER
      }
      else {
        return COMPARE_RESULT.SMALLER
      }
    }

    if (targetNode.val.length > currentNode.val.length) {
      return COMPARE_RESULT.BIGGER
    }
    else if (targetNode.val.length < currentNode.val.length) {
      return COMPARE_RESULT.SMALLER
    }
    else {
      return COMPARE_RESULT.EQUAL
    }
  }

  addWord (word: string): void {
    const node = new Node(word)

    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root
    let done = false

    while (!done) {
      const result = this._compareNodeWeight(node, current)

      switch (result) {
        case COMPARE_RESULT.EQUAL: {
          console.error(`${word} duplicated`)
          done = true
          break
        }

        case COMPARE_RESULT.BIGGER: {
          if (!current.right) {
            current.right = node
            done = true
          } else {
            current = current.right
            continue
          }

          break
        }

        case COMPARE_RESULT.SMALLER: {
          if (!current.left) {
            current.left = node
            done = true
          } else {
            current = current.left
            continue
          }
        }
      }
    }

    console.log(this.root)
  }

  search (word: string): boolean {
    let found = false
    const node = new Node(word)
    let current = this.root

    while (!found) {
      if (!current) {
        break
      }

      const result = this._compareNodeWeight(node, current)
      console.log(`find ${node.val}, compare ${current.val}, result ${COMPARE_RESULT[result]}`)

      switch (result) {
        case COMPARE_RESULT.EQUAL: {
          found = true
          break
        }

        case COMPARE_RESULT.SMALLER: {
          current = current.left
          break
        }

        case COMPARE_RESULT.BIGGER: {
          current = current.right
          break
        }
      }
    }

    console.log(`find ${word}, returns ${found}`)
    return found
  }
}

const wordDictionary = new WordDictionary()
wordDictionary.addWord('a')
wordDictionary.addWord('ab')

wordDictionary.search('a')
wordDictionary.search('a.')

export {}
