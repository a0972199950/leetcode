// 給定一個 urls: string[] 陣列，以及一個最大同時執行數 max: number
// 請實作一個 function，能夠將 url 轉為非同步工作後，依照 max 的限制，在同一時段最多能同時執行 max 個非同步工作
// 最後回傳一個 string[]，內容為每個非同步工作的結果。此結過需要按照 urls 的順序排列

console.clear()

// type Job = () => Promise<string>

// const runJobsInMax = async (urls: string[], max: number) => {
//   class JobManager {
//     jobs: Job[] = []
//     result: string[] = []
//     max: number
//     index = 0
//     runningJobs = 0
//     allDone = null
//     resolveAllDone = null
//     rejectAllDone = null

//     constructor (urls: string[]) {
//       this.jobs = urls.map(url => this.createJob(url))
//       this.max = max
//       this.allDone = new Promise((resolve, reject) => {
//         this.resolveAllDone = resolve
//         this.rejectAllDone = reject
//       })
//     }

//     private createJob (url: string) {
//       return () => new Promise<string>((resolve, reject) => {
//         setTimeout(() => {
//           resolve(`Job ${url} has finished`)
//         }, Math.random() * 1000)
//       })
//     }

//     public start () {
//       this.process()
//       return this.allDone
//     }

//     private process () {
//       while (this.runningJobs < this.max && this.index < this.jobs.length) {
//         const job = this.jobs[this.index]
//         this.runJob(job, this.index)
//         this.runningJobs++
//         this.index++
//       }
//     }

//     private async runJob (job: Job, index: number) {
//       console.log('runJob', index)
//       try {
//         const data = await job()
//         this.runningJobs--
//         this.result[index] = data
//         this.continueOrFinish()
//       } catch (e) {
//         this.rejectAllDone(e)
//       }
//     }

//     private continueOrFinish () {
//       if (this.result.filter(val => !!val).length === this.jobs.length) {
//         this.resolveAllDone(this.result)
//       } else {
//         this.process()
//       }
//     }
//   }

//   return new JobManager(urls).start()
// }

type Job = () => Promise<void>

const runJobsInMax = async (urls: string[], max: number): Promise<string[]> => {
  const results = []
  let jobs: Job[] = []
  let runningJobs = 0
  let finishedJobs = 0

  let resolve
  const allPromise = new Promise((_resolve) => {
    resolve = _resolve
  })

  const runJobs = () => {
    if (!jobs.length) {
      return
    }

    while (runningJobs < max) {
      const job = jobs.shift()
      job()
      runningJobs++
    }
  }


  const onFinish = () => {
    finishedJobs++

    if (finishedJobs === urls.length) {
      resolve()
    }

    runningJobs--
    runJobs()
  }

  jobs = urls.map((url, index) => {
    return async () => {
      console.log(`Job ${index + 1} started`)

      const result = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(`Result of ${url}`)
        }, Math.random() * 1000 * 3)
      })

      results[index] = result
      console.log(`Job ${index + 1} finished`)
      onFinish()
    }
  })

  runJobs()
  await allPromise
  return results
}

const fn = async () => {
  console.log('start')
  console.time('flag')

  const result = await runJobsInMax(['url 1', 'url 2', 'url 3', 'url 4', 'url 5', 'url 6', 'url 7', 'url 8'], 3)
  console.log('result: ', result)

  console.log('end')
  console.timeEnd('flag')
}

fn()



