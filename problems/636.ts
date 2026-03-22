// 636. Exclusive Time of Functions
// https://leetcode.com/problems/exclusive-time-of-functions/

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
console.log(exclusiveTime(8, ['0:start:0', '1:start:5', '2:start:6', '3:start:9', '4:start:11', '5:start:12', '6:start:14', '7:start:15', '1:start:24', '1:end:29', '7:end:34', '6:end:37', '5:end:39', '4:end:40', '3:end:45', '0:start:49', '0:end:54', '5:start:55', '5:end:59', '4:start:63', '4:end:66', '2:start:69', '2:end:70', '2:start:74', '6:start:78', '0:start:79', '0:end:80', '6:end:85', '1:start:89', '1:end:93', '2:end:96', '2:end:100', '1:end:102', '2:start:105', '2:end:109', '0:end:114']))
console.log(exclusiveTime(2, ['0:start:0', '1:start:2', '1:end:3', '2:start:5', '2:end:6', '0:end:8']))

