// 470. Implement Rand10() Using Rand7(). 

export {}
console.clear()

/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand7(): number {
  return Math.ceil(Math.random() * 7)
}

const result = []

for (let i = 0; i < 1000000; i++) {
  const num1 = rand7()
  const num2 = rand7()
  const num = num1 + num2
  result[num] = ++result[num] || 0
}

function rand10(): number {

}

console.log(result)
