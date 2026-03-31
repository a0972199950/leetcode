interface DebouncedFn<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void
  cancel(): void
  flush(): void
  pending(): boolean
}

function debounce <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
  options?: { leading?: boolean; trailing?: boolean, maxWait?: number }
): DebouncedFn<T> {
  const { leading = false, trailing = true, maxWait } = options || {}

  let hasTriggeredLeading = false
  let callback = null
  let timer: ReturnType<typeof setTimeout> | null = null
  let maxWaitTimer: ReturnType<typeof setTimeout> | null = null
  let latestArgs: Parameters<T>

  function reset () {
    clearTimeout(timer)
    clearTimeout(maxWaitTimer)
    timer = null
    maxWaitTimer = null
    callback = null
    hasTriggeredLeading = false
  }

  function returnValue (...args: Parameters<T>) {
    latestArgs = args

    if (leading && !hasTriggeredLeading) {
      hasTriggeredLeading = true
      fn(...latestArgs)

      callback = () => {
        reset()
      }

      timer = setTimeout(callback, delay)
      return
    }

    if (typeof maxWait === 'number' && maxWaitTimer === null) {
      maxWaitTimer = setTimeout(() => {
        if (trailing) {
          fn(...latestArgs)
        }

        reset()
      }, maxWait)
    }

    if (timer) {
      clearTimeout(timer)
    }

    callback = () => {
      if (trailing) {
        fn(...latestArgs)
      }

      reset()
    }

    timer = setTimeout(callback, delay)
  }

  returnValue.cancel = () => {
    reset()
  }

  returnValue.flush = () => {
    const callbackRef = callback
    returnValue.cancel()
    return callbackRef?.()
  }

  returnValue.pending = () => {
    return timer !== null
  }

  return returnValue
}

// Case 1: 基本 trailing debounce
// const log = debounce(console.log, 3000)
// log('a')        // t=0
// log('b')        // t=100
// log('c')        // t=200

// Case 2: leading debounce
// const log2 = debounce(console.log, 3000, { leading: true, trailing: false })
// log2('a')       // t=0 → 立即印出 'a'
// log2('b')       // t=100 → 忽略
// log2('c')       // t=200 → 忽略
// t=500 後冷卻結束，下一次呼叫才會再觸發

// Case 3: leading + trailing
// const log3 = debounce(console.log, 3000, { leading: true, trailing: true })
// log3('a')       // t=0 → 立即印出 'a'
// log3('b')       // t=100 → 忽略（但記住參數）
// log3('c')       // t=200 → 忽略（但記住參數)

// setTimeout(() => {
//   log3('d')
// }, 3000)
// t=500 → 印出 'c'（trailing 觸發，用最後一次的參數）

// Case 4: flush / cancel / pending
const log4 = debounce(console.log, 3000)
log4('hello')
console.log(log4.pending() ) // true
log4.flush()    // 立即印出 'hello'
log4.flush()    // 立即印出 'hello'
console.log(log4.pending())  // false

// const log5 = debounce(console.log, 3000)
// log5('world')
// log5.cancel()   // 取消
// 什麼都不會印出
