// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/

export {}
console.clear()

// Time: O(n)
// Space: O(1) 永遠最多只有兩個
function totalFruit(fruits: number[]): number {
  let left = 0
  let max = 0
  // { fruitType: count }
  const record: Map<number, number> = new Map()

  for (let right = 0; right < fruits.length; right++) {
    const fruitType = fruits[right]
    record.set(fruitType, (record.get(fruitType) ?? 0) + 1)

    while (record.size > 2) {
      const leftFruitType = fruits[left]

      record.set(leftFruitType, record.get(leftFruitType)! - 1)

      if (record.get(leftFruitType) === 0) {
        record.delete(leftFruitType)
      }

      left++
    }

    // console.log(fruits.slice(left, right + 1), right - left + 1)
    max = Math.max(max, right - left + 1)
  }

  return max
}

console.log(totalFruit([1, 2, 1]))
console.log(totalFruit([0, 1, 2, 2]))
console.log(totalFruit([1, 2, 3, 2, 2]))
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))
