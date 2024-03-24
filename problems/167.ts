// 167. Two Sum II - Input Array Is Sorted

console.clear()

// 暴力解 O(n2)
// function twoSum(numbers: number[], target: number): number[] {
//   i_loop:
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       const sum = numbers[i] + numbers[j]
//       if (sum === target) {
//         return [i + 1, j + 1]
//       }

//       if (sum > target) {
//         continue i_loop
//       }
//     }
//   }

//   return []
// }

// Binary search O(n * logN)
// function twoSum(numbers: number[], target: number): number[] {
//   for (let i = 0; i < numbers.length; i++) {
//     let left = i + 1
//     let right = numbers.length - 1
    
//     while (right - left > 1) {
//       const center = Math.ceil(left + ((right - left) / 2))
//       // console.log('center: ', numbers[center])
//       const sum = numbers[i] + numbers[center]

//       if (sum === target) {
//         return [i + 1, center + 1]
//       }
//       else if (sum > target) {
//         right = center
//       }
//       else if (sum < target) {
//         left = center
//       }
//     }

//     if (numbers[i] + numbers[left] === target) {
//       return [i + 1, left + 1]
//     }

//     if (numbers[i] + numbers[right] === target) {
//       return [i + 1, right + 1]
//     }
//   }

//   return []
// }

// Two pointer O(n)
function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1

  while (right > left) {
    const sum = numbers[left] + numbers[right]

    if (sum === target) {
      return [left + 1, right + 1]
    }
    else if (sum > target) {
      right--
    }
    else if (sum < target) {
      left++
    }
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))

export {}
