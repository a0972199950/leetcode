// 118. Pascal's Triangle

function generate(numRows: number): number[][] {
  const result: number[][] = []

  for (let i = 0; i < numRows; i++) {
    result.push([])

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i].push(1)
      } else {
        result[i].push(result[i - 1][j - 1] + result[i - 1][j])
      }

      console.log(result)
    }
  }

  return result
}

console.log(generate(0))

