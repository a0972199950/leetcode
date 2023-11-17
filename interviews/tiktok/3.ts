// 給定一個 urls: string[] 陣列，以及一個最大同時執行數 max: number
// 請實作一個 function，能夠將 url 轉為非同步工作後，依照 max 的限制，在同一時段最多能同時執行 max 個非同步工作
// 最後回傳一個 string[]，內容為每個非同步工作的結果。此結過需要按照 urls 的順序排列

console.clear()

type Job = () => Promise<string>

const runJobsInMax = async (urls: string[], max: number) => {
  class JobManager {
    jobs: Job[] = []
    result: string[] = []
    max: number
    index = 0
    runningJobs = 0
    allDone = null
    resolveAllDone = null
    rejectAllDone = null

    constructor (urls: string[]) {
      this.jobs = urls.map(url => this.createJob(url))
      this.max = max
      this.allDone = new Promise((resolve, reject) => {
        this.resolveAllDone = resolve
        this.rejectAllDone = reject
      })
    }

    private createJob (url: string) {
      return () => new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          resolve(`Job ${url} has finished`)
        }, Math.random() * 1000)
      })
    }

    public start () {
      this.process()
      return this.allDone
    }

    private process () {
      while (this.runningJobs < this.max && this.index < this.jobs.length) {
        const job = this.jobs[this.index]
        this.runJob(job, this.index)
        this.runningJobs++
        this.index++
      }
    }

    private async runJob (job: Job, index: number) {
      console.log('runJob', index)
      try {
        const data = await job()
        this.runningJobs--
        this.result[index] = data
        this.continueOrFinish()
      } catch (e) {
        this.rejectAllDone(e)
      }
    }

    private continueOrFinish () {
      if (this.result.filter(val => !!val).length === this.jobs.length) {
        this.resolveAllDone(this.result)
      } else {
        this.process()
      }
    }
  }

  return new JobManager(urls).start()
}

const fn = async () => {
  console.log('start')
  console.time('flag')

  const result = await runJobsInMax(['url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8'], 1)
  console.log('result: ', result)

  console.log('end')
  console.timeEnd('flag')
}

fn()

export {}

