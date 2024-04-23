// 47. Permutations II

console.clear()

// function permuteUnique(nums: number[]): number[][] {
//   const result = []
//   const history = new Set()

//   const dfs = (remain: number[], arr: number[]) => {
//     if (!remain.length) {
//       if (!history.has(arr.join(','))) {
//         result.push([...arr])
//         history.add(arr.join(','))
//       }
      
//       return
//     }

//     for (let i = 0; i < remain.length; i++) {
//       const index = remain[i]
//       arr.push(nums[index])

//       dfs(
//         remain.filter(item => item !== index),
//         arr
//       )

//       arr.pop()
//     }
//   }

//   dfs(
//     Array(nums.length).fill(null).map((_, index) => index),
//     []
//   )

//   return result
// }

function permuteUnique(nums: number[]): number[][] {
  const hash: Record<number, number> = {}

  for (const num of nums) {
    hash[num] = ++hash[num] || 1
  }

  const result = []

  const dfs = (arr: number[]) => {
    if (arr.length === nums.length) {
      result.push([...arr])
      return
    }

    Object
      .entries(hash)
      .forEach(([num, count]) => {
        if (!count) {
          return
        }

        arr.push(Number(num))
        hash[num]--

        dfs(arr)

        arr.pop()
        hash[num]++
      })
  }

  dfs([])

  return result
}

console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 3]))

export {}
