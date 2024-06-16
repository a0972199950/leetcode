// 46. Permutations

export {}
console.clear()

// function permute(nums: number[]): number[][] {
//   const result = []

//   const loop = (remainNums: number[], prefix: number[]) => {
//     console.log('loop', remainNums, prefix)
//     if (remainNums.length === 1) {
//       result.push([...prefix, remainNums[0]])
//       return
//     }

//     for (let i = 0; i < remainNums.length; i++) {
//       const newRemainNums = [...remainNums]
//       newRemainNums.splice(i, 1)

//       loop(newRemainNums, [...prefix, remainNums[i]])
//     }
//   }

//   loop(nums, [])

//   console.log('result: ', result)
//   return result
// }

function permute(nums: number[]): number[][] {
  const results = []

  const dfs = (combination: number[], remains: number[]) => {
    if (!remains.length) {
      results.push(combination)
      return
    }

    for (let i = 0; i < remains.length; i++) {
      dfs([...combination, remains[i]], remains.filter((_remain, index) => index !== i))
    }
  }

  dfs([], nums)

  console.log('results: ', results)
  return results
}

permute([1, 2, 3])
permute([0, 1])
permute([1])


