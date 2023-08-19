// 239. Sliding Window Maximum

console.clear()

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   const record = Array
//     .from({ length: k })
//     .reduce((sum, _item, index) => {
//       sum[nums[index]] = ++sum[nums[index]] || 1
//       return sum
//     }, {}) as Record<number, number>

//   const maxes = [Math.max(...Object.keys(record).map(item => +item))]

//   for (let i = 0; i < nums.length - k; i++) {
//     const numToRemove = nums[i]
//     const numToAdd = nums[i + k]
//     const lastMax = maxes[maxes.length - 1]

//     record[numToRemove]--
//     record[numToAdd] = ++record[numToAdd] || 1

//     if (!record[numToRemove]) {
//       delete record[numToRemove]
//     }

//     let max: number
//     if (record[lastMax]) {
//       max = Math.max(lastMax, numToAdd)
//     } else {
//       max = Math.max(...Object.keys(record).map(item => +item))
//     }

//     maxes.push(max)
//   }

//   return maxes
// }

function maxSlidingWindow(nums: number[], k: number): number[] {
  const maxQueue = []
  const maxes = []

  const addNumToQueue = (num: number) => {
    let inserted = false

    while (!inserted) {
      const lastNum = maxQueue[maxQueue.length - 1]

      if (
        typeof lastNum !== 'number'
        || lastNum >= num
      ) {
        maxQueue.push(num)
        inserted = true
      }
      else if (lastNum < num) {
        maxQueue.pop()
      }
      else {
        throw new Error('不該發生')
      }
    }

  }

  for (let i = 0; i < nums.length; i++) {
    const numToAdd = nums[i]
    
    if (i < k - 1) {
      addNumToQueue(numToAdd)
    }
    else {
      const numToRemove = nums[i - k]

      if (numToRemove === maxQueue[0]) {
        maxQueue.shift()
      }

      addNumToQueue(numToAdd)
      maxes.push(maxQueue[0])
    }
  }

  return maxes
}

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
// console.log(maxSlidingWindow([1], 1))
// console.log(maxSlidingWindow([1, -1], 1))
// console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3))
console.log(maxSlidingWindow([5, 4, 3, 2, 1, 0, -1], 3))

export {}
