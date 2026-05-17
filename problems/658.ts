// 658. Find K Closest Elements

export {}
console.clear()

// Time: O(logN + k)
// Space: O(1)
// function findClosestElements(arr: number[], k: number, x: number): number[] {
//   if (!k) {
//     return []
//   }
  
//   if (x < arr[0]) {
//     return arr.slice(0, k)
//   }

//   if (x > arr.at(-1)) {
//     return arr.slice(arr.length - k)
//   }

//   // 找 x 最接近 arr 中的哪一個數字，可能存在於 arr 中，也可能不存在，要分開處理
//   let left = 0
//   let right = arr.length - 1
//   let middle

//   while (left < right) {
//     middle = Math.floor(left + ((right - left) / 2))

//     if (arr[middle] === x) {
//       left = middle
//       break
//     }

//     if (arr[middle] > x) {
//       right = middle
//     } else if (arr[middle] < x) {
//       left = middle + 1
//     }
//   }

//   middle = left
//   let count = k

//   // x 存在於 array 中
//   if (arr[middle] === x) {
//     left = middle
//     right = middle
//     count--
//   // x 不存在於 array 中，middle 可能在 x 的右邊或左邊
//   } else {
//     let a = null
//     let b = null

//     if (arr[middle] > x) {
//       a = middle - 1
//       b = middle
//     } else {
//       a = middle
//       b = middle + 1
//     }

//     if (Math.abs(x - arr[b]) < Math.abs(x - arr[a])) {
//       left = b
//       right = b
//     } else {
//       left = a
//       right = a
//     }

//     count--
//   }

//   while (count > 0 && (left > 0 || right < arr.length - 1)) {
//     const nextLeft = Math.max(left - 1, 0)
//     const nextRight = Math.min(right + 1, arr.length - 1)
//     if (
//       // 左邊比較近
//       Math.abs(x - arr[nextLeft]) <= Math.abs(x - arr[nextRight])
//       // 右邊滿了
//       || right === arr.length - 1
//     ) {
//       // 往左推
//       left = nextLeft
//     } else {
//       // 往右推
//       right = nextRight
//     }

//     count--
//   }

//   // console.log('left: ', left, 'right: ', right)

//   return arr.slice(left, right + 1)
// }

// Time: O(logN)
// Space: O(1)
function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0
  let right = arr.length - k
  // console.log('left: ', left, 'right: ', right)

  while (left < right) {
    const middle = Math.floor(left + ((right - left) / 2))
    // console.log(middle, arr.slice(middle, middle + k))

    // 視窗往左移，要放棄多少
    const leftRemoveNum = arr[middle + k]
    const leftRemoveNumDistance = Math.abs(x - leftRemoveNum)

    // 視窗往右移，要放棄多少距離
    const rightRemoveNum = arr[middle]
    const rightRemoveNumDistance = Math.abs(x - rightRemoveNum)

    // 放棄距離愈大愈好
    if (leftRemoveNum === rightRemoveNum) {
      if (arr[middle] < x) {
        left = middle + 1
      } else {
        right = middle
      }
    }
    else if (leftRemoveNumDistance >= rightRemoveNumDistance) {
      right = middle
    } else {
      left = middle + 1
    }

    // console.log('left: ', left, 'right: ', right)
  }

  return arr.slice(left, left + k)
}

console.log(findClosestElements([3, 3, 3, 3, 3, 8, 8, 10, 12], 10, 6))
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3))
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1))
console.log(findClosestElements([0, 1, 2, 2, 2, 3, 6, 8, 8, 9], 5, 9))
console.log(findClosestElements([1, 1, 2, 2, 2, 2, 2, 3, 3], 3, 3))
