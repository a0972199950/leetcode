// 134. Gas Station

console.clear()

// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   let remainGas = 0

//   i_loop:
//   for (let i = 0; i < gas.length; i++) {
//     remainGas = 0

//     for (let j = i; j < gas.length + i; j++) {
//       remainGas += (gas[j  % gas.length] - cost[j  % gas.length])

//       // console.log('i: ', i, 'j: ', j, 'remainGas: ', remainGas)

//       if (remainGas < 0) {
//         continue i_loop
//       }
//     }

//     return i
//   }

//   return -1
// }

// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   console.log(gas, cost)
//   let i = 0
//   let j = -1
//   let remainGas = 0

//   while (i < gas.length && j < gas.length * 2) {
//     j++

//     if (j > i) {
//       remainGas -= cost[(j - 1) % gas.length]
//     }

//     while (remainGas < 0 && i < j && i < gas.length) {
//       remainGas -= gas[i]
//       remainGas += cost[i]
//       i++
//     }

//     remainGas += gas[j % gas.length]

//     if (j >= gas.length && j % gas.length === i) {
//       console.log('i: ', i, 'j: ', j - 1, 'remainGas: ', remainGas)
//       return i
//     }

//     console.log('i: ', i, 'j: ', j - 1, 'remainGas: ', remainGas)
//   }

//   return -1
// }

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let gasSum = 0
  let costSum = 0

  for (let i = 0; i < gas.length; i++) {
    gasSum += gas[i]
    costSum += cost[i]
  }

  if (gasSum < costSum) {
    return -1
  }

  let start = 0
  let remainGas = 0

  for (let i = 0; i < gas.length; i++) {
    remainGas += (gas[i] - cost[i])

    if (remainGas < 0) {
      remainGas = 0
      start = i + 1
    }
  }

  return start
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]))
console.log(canCompleteCircuit([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))

export {}
