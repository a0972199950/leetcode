// 1567. Maximum Length of Subarray With Positive Product

// interface PossibleMaxLength {
//   minusNumCount: number
//   length: number
// }

// function getMaxLen(nums: number[]): number {
//   let maxLength = 0
//   let possibleMaxLengths: PossibleMaxLength[] = []

//   for (const num of nums) {
//     if (num === 0) {
//       possibleMaxLengths = []
//       continue
//     }

//     if (num > 0) {
//       maxLength = Math.max(maxLength, 1)
//     }

//     const newPossibleMaxLengths: PossibleMaxLength[] = [{
//       minusNumCount: num < 0 ? 1 : 0,
//       length: 1
//     }]

//     possibleMaxLengths.forEach(({ minusNumCount, length }) => {
//       const newMinusNumCount = num < 0 ? minusNumCount + 1 : minusNumCount
//       const newLength = length + 1

//       // Sum will be positive
//       if (newMinusNumCount % 2 === 0) {
//         maxLength = Math.max(maxLength, newLength)
//       }

//       newPossibleMaxLengths.push({ minusNumCount: newMinusNumCount, length: newLength })
//     })

//     console.log(newPossibleMaxLengths)

//     possibleMaxLengths = newPossibleMaxLengths
//   }

//   console.log(maxLength)

//   return maxLength
// }

function getMaxLen(nums: number[]): number {
  let allMinusNumCount = 0
  let maxLength = 0
  let subStart = 0
  let whileResult = null

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      allMinusNumCount = 0
      subStart = right + 1
      whileResult = null
      continue
    }

    // 統計到目前 right 位置為止的所有負數數字數量
    if (nums[right] < 0) {
      allMinusNumCount++
    }

    let left = subStart

    if (allMinusNumCount % 2 !== 0) {
      if (whileResult !== null) {
        left = whileResult
      } else {
        while (left < right) {
          if (nums[left] < 0) {
            left++
            break
          } else {
            left++
          }
        }
      }
    }

    if (right === left && nums[right] < 0) {
      continue
    }

    maxLength = Math.max(maxLength, (right - left + 1))
  }

  console.log(maxLength)
  return maxLength
}

getMaxLen([1, -2, -3, 4])
getMaxLen([0, 1, -2, -3, -4])
getMaxLen([-1, -2, -3, 0, 1])
getMaxLen([-1])

export {}