// 69. Sqrt(x)

console.clear()

// function mySqrt(x: number): number {
//   let num = 1
//   let result = null

//   while (num * num <= x) {
//     result = num
//     num++
//   }

//   return result
// }

function mySqrt(x: number): number {
  let left = 1
  let right = x

  while (right - left > 1) {
    const middle = Math.floor(left + (right - left) / 2)
    const val = middle * middle

    if (val === x) {
      return middle
    }

    if (val > x) {
      right = middle
    } else {
      left = middle
    }
  }

  // console.log(left, right)

  if (right * right <= x) {
    return right
  } else {
    return left
  }
}

// console.log(mySqrt(4))
// console.log(mySqrt(8))
console.log(mySqrt(0))


