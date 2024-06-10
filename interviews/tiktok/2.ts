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


runJobsInMax(jobs, 3)


