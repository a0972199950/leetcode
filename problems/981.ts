// 981. Time Based Key-Value Store

console.clear()

class TimeMap {
  data: Record<string, { value: string, timestamp: number}[]> = {}

  set(key: string, value: string, timestamp: number): void {
    if (!this.data[key]) {
      this.data[key] = []
    }

    this.data[key].push({ value, timestamp })
  }

  get(key: string, timestamp: number): string {
    const values = this.data[key]

    if (!values) {
      return ''
    }

    let left = 0
    let right = values.length - 1
    let middle

    while (right >= left) {
      middle = Math.floor(left + (right - left) / 2)

      const { value, timestamp: middleTimestamp } = values[middle]

      if (middleTimestamp === timestamp) {
        return value
      } else if (middleTimestamp < timestamp) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }

    if (values[middle].timestamp > timestamp) {
      middle--
    }

    return values[middle]?.value ?? ''
  }
}

const timeMap = new TimeMap()
console.log(timeMap.set('foo', 'bar', 1))  // store the key "foo" and value "bar" along with timestamp = 1.
console.log(timeMap.get('foo', 1))         // return "bar"
console.log(timeMap.get('foo', 3))         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
console.log(timeMap.set('foo', 'bar2', 4)) // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(timeMap.get('foo', 4))         // return "bar2"
console.log(timeMap.get('foo', 5))         // return "bar2"

export {}
