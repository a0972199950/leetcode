const jump = (n) => {
  const dfs = (position, prevStep) => {
    if (position === n) {
      return 1
    }

    if (position > n) {
      return 0
    }

    let count = 0
    for (let i = 1; i <= 3; i++) {
      if (i !== prevStep) {
        count += dfs(position + i, i)
      }
    }

    return count
  }

  return dfs(0, 0)
}

console.log('1: ', jump(1))
console.log('2: ', jump(2))
console.log('3: ', jump(3))
console.log('4: ', jump(4))
