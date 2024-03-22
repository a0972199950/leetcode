// 299. Bulls and Cows

function getHint(secret: string, guess: string): string {
  let bulls = 0
  let cows = 0

  const secretTable: Record<string, number> = {}
  const guessTable: Record<string, number> = {}

  for (const char of secret) {
    secretTable[char] = ++secretTable[char] || 1
  }

  for (const char of guess) {
    guessTable[char] = ++guessTable[char] || 1
  }

  for (let i = 0; i < guess.length; i++) {
    const char = guess[i]

    if (char === secret[i]) {
      bulls++
      secretTable[char]--
      guessTable[char]--
    }
  }

  Object
    .entries(guessTable)
    .forEach(([char, count]) => {
      cows += Math.min(count, (secretTable[char] || 0))
    })

  console.log(bulls, cows)

  return `${bulls}A${cows}B`
}

console.log(getHint('1123', '0111'))

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val)
  }

  const inserted = false
  const current = root

  while (!inserted) {
    if (!current.left && val < current.right?.val) {

    }
  }
}

export {}