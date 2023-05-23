// 621. Task Scheduler

console.clear()

function leastInterval(tasks: string[], n: number): number {
  if (n <= 0) {
    console.log(tasks.length)
    return tasks.length
  }

  const taskStatus: Record<string, { count: number, cooldown: number }> = {}

  for (const task of tasks) {
    if (taskStatus[task]) {
      taskStatus[task].count++
    } else {
      taskStatus[task] = {
        count: 1,
        cooldown: 0
      }
    }
  }

  console.log(taskStatus)

  const taskStatuses = Object.entries(taskStatus)
    .map(([task, status]) => ({
      task,
      ...status
    }))
    .sort((a, b) => a.count - b.count)

  console.log(taskStatuses)

  let timeUnit = 0

  while (taskStatuses.length) {
    let nextRunningTaskIndex = null
    let maxCount = 0

    for (let i = 0; i < taskStatuses.length; i++) {
      const taskStatus = taskStatuses[i]

      // 找出 count 剩最多，且冷卻完成的
      if (taskStatus.cooldown <= 0 && taskStatus.count >= maxCount) {
        maxCount = taskStatus.count
        nextRunningTaskIndex = i
      }

      // 冷卻 -1
      if (taskStatus.cooldown > 0) {
        taskStatus.cooldown--
      }
    }

    console.log(taskStatuses[nextRunningTaskIndex]?.task || 'idle')

    if (nextRunningTaskIndex !== null) {
      taskStatuses[nextRunningTaskIndex].count--

      if (taskStatuses[nextRunningTaskIndex].count > 0) {
        taskStatuses[nextRunningTaskIndex].cooldown = n
      } else {
        taskStatuses.splice(nextRunningTaskIndex, 1)
      }
    }

    timeUnit++
  }

  console.log(timeUnit)
  return timeUnit
}

// leastInterval(['A', 'A', 'A', 'A', 'B', 'C', 'B', 'B'], 3)
leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)
// leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)
// leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)
// leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2)



export {}
