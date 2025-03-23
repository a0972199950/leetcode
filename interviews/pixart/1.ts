console.clear()

const jump = (n) => {
  const record = new Map()

  const dfs = (position, prevStep) => {
    if (position === n) {
      return 1
    }

    if (position > n) {
      return 0
    }

    const key = `[${position},${prevStep}]`

    if (record.has(key)) {
      return record.get(key)
    }

    const possibles = [1, 2, 3]
      .filter((nextStep) => nextStep !== prevStep)
      .reduce((sum, nextStep) => {
        return sum + dfs(position + nextStep, nextStep)
      }, 0)

    record.set(key, possibles)
    return possibles
  }

  return dfs(0, 0)
}

console.log('1: ', jump(1))
console.log('2: ', jump(2))
console.log('3: ', jump(3))
console.log('4: ', jump(4))

export default ''
