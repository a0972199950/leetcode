// 907. Sum of Subarray Minimums

export {}
console.clear()

// Time O(n)
// Space O(n)
// [3/19] 還是完全看不懂
function sumSubarrayMins(arr: number[]): number {
  const MOD = 1e9 + 7
  let result = 0
  const increasingStack: { index: number, value: number }[] = []

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    let top = increasingStack.at(-1)

    while (increasingStack.length && top.value >= num) {
      const last = increasingStack.pop()
      top = increasingStack.at(-1)

      // 以 last.value 為最小元素的子陣列的右邊界
      const rightCount = i - last.index

      // 以 last.value 為最小元素的子陣列的左邊界
      const leftCount = last.index - (top ? top.index : -1)

      result = (result + last.value * rightCount * leftCount) % MOD
    }

    increasingStack.push({ index: i, value: num })
  }

  for (let i = 0; i < increasingStack.length; i++) {
    const current = increasingStack[i]
    const prev = increasingStack[i - 1]

    const rightCount = arr.length - current.index
    const leftCount  = current.index - (prev ? prev.index : -1)

    result = (result + current.value * rightCount * leftCount) % MOD
  }

  return result
}

console.log(sumSubarrayMins([3, 1, 2, 4]))
console.log(sumSubarrayMins([11, 81, 94, 43, 3]))
