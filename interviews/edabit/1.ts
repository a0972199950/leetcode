export {}
console.clear()

const countTrue = (arr: boolean[]) => {
  return arr.reduce((sum, item) => {
    return item === true ? sum + 1 : sum
  }, 0)
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))

export default {}