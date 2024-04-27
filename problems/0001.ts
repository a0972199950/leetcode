// 0001. 

// Title
// Balance Point

// Question description
// Given an array of integers, find a balance point in the array where the sum of the numbers to the left of the point is equal to the sum of the numbers to the right of the point. If there are multiple balance points, return the leftmost one. If no balance point exists, return -1.​

// Input: [1, 7, 3, 6, 2, 9]​
// Output: 3

console.clear()

const fn = (arr: number[]) => {
  const sum = arr.reduce((result, item) => result + item, 0)
  let leftSum = 0

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      leftSum += arr[i]
      continue
    }

    const rightSum = sum - arr[i] - leftSum
    if (leftSum === rightSum) {
      return i
    }

    leftSum += arr[i]
  }

  return -1
}

// console.log(fn([1, 7, 3, 6, 2, 9]​))
// console.log(fn([1, 4, 5, 9]​))
// console.log(fn([14, 1, 3, 3, 3, 3, 2]​))
// console.log(fn([]​))
console.log(fn([0, 0, 0, 0]​))



export {}
