// 43. Multiply Strings

function multiply(num1: string, num2: string): string {
  let pendingResults = []

  for (let i = num2.length - 1; i >= 0; i--) {
    let results = ''.padEnd(num2.length - 1 - i, '0')
    let hoist = 0

    for (let j = num1.length - 1; j >= 0; j--) {
      let result = String(Number(num2[i]) * Number(num1[j]) + hoist)

      // console.log('result: ', result)

      if (result.length > 1) {
        hoist = Number(result.slice(0, -1))
        result = result.at(-1)
      } else {
        hoist = 0
      }

      console.log('hoist: ', hoist)

      results = result + results
    }

    if (hoist > 0) {
      results = hoist + results
    }

    pendingResults.push(results)
  }

  const maxLength = Math.max(...pendingResults.map(pendingResult => pendingResult.length))
  pendingResults = pendingResults.map(pendingResult => pendingResult.padStart(maxLength, '0'))

  let hoist = 0
  let finalResult = ''

  for (let i = maxLength - 1; i >= 0; i--) {
    let result = String(pendingResults.reduce((sum, pendingResult) => sum + Number(pendingResult[i]), 0) + hoist)

    // console.log('result: ', result)

    if (result.length > 1) {
      hoist = Number(result.slice(0, -1))
      result = result.at(-1)
    } else {
      hoist = 0
    }

    console.log('hoist: ', hoist)

    finalResult = result + finalResult
  }

  if (hoist > 0) {
    finalResult = hoist + finalResult
  }

  console.log(finalResult)

  return finalResult
}

// multiply('406', '1304')
// multiply('406', '12')
multiply('401716832807512840963', '167141802233061013023557397451289113296441069')

export {}