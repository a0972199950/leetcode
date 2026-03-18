// 1472. Design Browser History

export {}
console.clear()

class BrowserHistory {
  private history: string[] = []
  private currentIndex = -1

  constructor (url: string) {
    this.history.push(url)
    this.currentIndex = 0
  }

  visit(url: string): void {
    this.history.length = this.currentIndex + 1
    this.history.push(url)
    this.currentIndex++
  }

  back(steps: number): string {
    this.currentIndex = Math.max(0, this.currentIndex - steps)
    return this.history[this.currentIndex]
  }

  forward(steps: number): string {
    this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps)
    return this.history[this.currentIndex]
  }
}

const BrowserHistoryProxy = new Proxy(BrowserHistory, {
  construct(target, args) {
    const instance = new target(...args as [string])

    // 2. 回傳一個針對「實例」的 Proxy
    return new Proxy(instance, {
      get(obj, prop) {
        const value = obj[prop]
        
        // 確保攔截的是函式
        if (typeof value === 'function') {
          return (...methodArgs) => {
            const result = value.apply(obj, methodArgs)
            console.log(`<<< 回傳結果: ${result}`)
            return result
          }
        }
        return value
      }
    })
  }
})

const browserHistory = new BrowserHistoryProxy('leetcode.com')
browserHistory.visit('google.com')       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit('facebook.com')     // You are in "google.com". Visit "facebook.com"
browserHistory.visit('youtube.com')      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1)                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1)                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1)                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit('linkedin.com')     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2)                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2)                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7)                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
