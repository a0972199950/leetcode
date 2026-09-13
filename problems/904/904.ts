// 904. Fruit Into Baskets
// 最後練習時間：2026-09-13
// https://leetcode.com/problems/fruit-into-baskets/

console.clear()

// Time: O(n)
// Space: O(1) 永遠最多只有兩個
// function totalFruit(fruits: number[]): number {
//   let left = 0
//   let max = 0
//   // { fruitType: count }
//   const record: Map<number, number> = new Map()

//   for (let right = 0; right < fruits.length; right++) {
//     const fruitType = fruits[right]
//     record.set(fruitType, (record.get(fruitType) ?? 0) + 1)

//     while (record.size > 2) {
//       const leftFruitType = fruits[left]

//       record.set(leftFruitType, record.get(leftFruitType)! - 1)

//       if (record.get(leftFruitType) === 0) {
//         record.delete(leftFruitType)
//       }

//       left++
//     }

//     // console.log(fruits.slice(left, right + 1), right - left + 1)
//     max = Math.max(max, right - left + 1)
//   }

//   return max
// }

// Time: O(n)
// Space: O(1)
// function totalFruit(fruits: number[]): number {
//   const types = new Map()
//   let length = 0

//   let left = 0
//   for (let right = 0; right < fruits.length; right++) {
//     const rightFruit = fruits[right]

//     types.set(rightFruit, (types.get(rightFruit) ?? 0) + 1)

//     while (types.size > 2) {
//       const leftFruit = fruits[left]

//       types.set(leftFruit, types.get(leftFruit) - 1)
      
//       if (types.get(leftFruit) === 0) {
//         types.delete(leftFruit)
//       }

//       // console.log(types)
      
//       left++
//     }

//     length = Math.max(length, right - left + 1)

//   }

//   return length
// }

// Time: O(n)
// Space: O(n)
function totalFruit(fruits: number[]): number {
  const record: number[] = Array(fruits.length).fill(0)
  let nonZeroCount = 0
  let length = 0

  let left = 0
  for (let right = 0; right < fruits.length; right++) {
    const rightFruit = fruits[right]

    if (record[rightFruit] === 0) {
      nonZeroCount++
    }
    record[rightFruit]++

    while (nonZeroCount > 2) {
      const leftFruit = fruits[left]

      record[leftFruit]--
      
      if (record[leftFruit] === 0) {
        nonZeroCount--
      }
      
      left++
    }

    length = Math.max(length, right - left + 1)

  }

  return length
}

console.log(totalFruit([1, 2, 1])) // 3
console.log(totalFruit([0, 1, 2, 2])) // 3
console.log(totalFruit([1, 2, 3, 2, 2])) // 4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])) // 5
