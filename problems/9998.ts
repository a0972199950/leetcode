// 9998. 

console.clear()

// paste function here
// function debounce (
//   cb: (...args: any[]) => any,
//   time: number,
//   config = { leading: false, tailing: true }
// ) {
//   const { leading, tailing } = config
//   let timer = null

//   const debouncedFn = (...args: any[]) => {
//     if (!timer) {
//       leading && cb.call(this, ...args)
//     } else {
//       clearTimeout(timer)
//     }

//     timer = setTimeout(() => {
//       tailing && cb.call(this, ...args)
//       timer = null
//     }, time)
//   }

//   debouncedFn.abort = () => {
//     clearTimeout(timer)
//     timer = null
//   }

//   return debouncedFn
// }

// function throttle (
//   cb: (...args: any[]) => any,
//   time: number,
//   config = { leading: false, tailing: true }
// ) {
//   const { leading, tailing } = config
//   let timer = null

//   const throttledFn = (...args: any[]) => {
//     if (timer) {
//       return
//     }

//     leading && cb.call(this, ...args)

//     timer = setTimeout(() => {
//       tailing && cb.call(this, ...args)
//       clearTimeout(timer)
//       timer = null
//     }, time)
//   }

//   throttledFn.abort = () => {
//     clearTimeout(timer)
//     timer = null
//   }

//   return throttle
// }

// const foo = {
//   a: {
//     b: 1
//   },
//   c: [1, 2, 4],
//   d: null, // nothing
//   e: [1, 2, { 4: 5 }],
//   f: { 4: 1 }
// }

// console output 1 => 1 => 2 => 4 => 1 => 2 => 5 => 1
// traverse JS object recursively
// function traverse(obj: Record<any, any>) {
//   const values = Object.values(obj)

//   const result = []

//   const loopCheckValues = (values: any[]) => {
//     for (const value of values) {
//       switch (typeof value) {
//         case 'number':
//         case 'string':
//         case 'boolean':
//           result.push(value)
//           break
  
//         case 'object':
//           if (!value) {
//             break
//           }
//           else if (Array.isArray(value)) {
//             loopCheckValues(value)
//           }
//           else {
//             result.push(...traverse(value))
//           }
//           break
  
//         default:
//           break
//       }
//     }
//   }

//   loopCheckValues(values)

//   return result
// }

// console.log(...traverse(foo))

const runJobsInMax = (jobs: (() => Promise<any>)[], maxJobsAtSameTime = 3) => {
  class JobManager {
    jobs = []
    runningJobs = 0

    start (jobs: (() => Promise<any>)[]) {
      this.jobs = [...jobs]
      this.startNext()
    }

    startNext () {
      while (this.jobs.length && this.runningJobs < maxJobsAtSameTime) {
        const job = this.jobs.shift()
        this.runningJobs++
        this.runJob(job)
      }
    }

    finish () {
      this.runningJobs--
      this.startNext()
    }

    runJob (job: () => Promise<any>) {
      job()
        .then(() => this.finish())
        .catch(() => this.finish())
    }
  }

  new JobManager().start(jobs)
}

const jobs = Array
  .from(Array(24))
  .map((_, index) => {
    return () => new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Job ${index + 1} has finished`)
        resolve(index)
      }, 1000)
    })
  })


runJobsInMax(jobs, 12)


