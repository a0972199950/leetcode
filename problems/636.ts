// 636. Exclusive Time of Functions
// https://leetcode.com/problems/exclusive-time-of-functions/description/?envType=problem-list-v2&envId=dsa-linear-shoal-stack

export {}
console.clear()

// type Status = 'start' | 'end'

// function exclusiveTime(n: number, logs: string[]): number[] {
//   const parseLog = (log: string) => {
//     const [id, status, timestamp] = log.split(':')
//     return {
//       id: Number(id), status, timestamp: Number(timestamp)
//     } as { id: number, status: Status, timestamp: number}
//   }

//   const resultArr: number[] = []
//   const stack: { id: number, timestamp: number }[] = []
//   let timeSum = 0

//   for (const log of logs) {
//     const { id, status, timestamp } = parseLog(log)

//     if (status === 'start') {
//       stack.push({ id, timestamp })
//       continue
//     }

//     if (status === 'end') {
//       const last = stack.pop()
//       const time = timestamp - last.timestamp + 1 - timeSum
//       resultArr[id] = (resultArr[id] || 0) + time
//       console.log('id: ', id, 'time: ', time)
//       timeSum += time
//     }
//   }

//   console.log(resultArr)
//   return []
// }

// Time: O(n)
// Space: O(n)
function exclusiveTime(n: number, logs: string[]): number[] {
  const parseLog = (log: string) => {
    const [fn, type, timestamp] = log.split(':')

    return {
      fn: Number(fn),
      type: type as 'start' | 'end',
      timestamp: Number(timestamp)
    }
  }

  const stack: number[] = []
  const result = Array(n).fill(0)
  let lastTimestamp = 0

  for (const log of logs) {
    const { fn, type, timestamp } = parseLog(log)

    if (type === 'start') {
      const time = timestamp - lastTimestamp
      stack.length && (result[stack.at(-1)] += time)
      lastTimestamp = timestamp
      stack.push(fn)

    }

    if (type === 'end') {
      const time = timestamp - lastTimestamp + 1
      result[stack.pop()] += time
      lastTimestamp = timestamp + 1
    }

  }

  return result
}

console.log(exclusiveTime(2, ['0:start:0', '1:start:2', '1:end:5', '0:end:6']))
console.log(exclusiveTime(1, ['0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7']))
console.log(exclusiveTime(2, ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7']))
