// 706. Design HashMap

console.clear()

class MyHashMap {
  data: Record<number, number> = {}

  put(key: number, value: number): void {
    this.data[key] = value
  }

  get(key: number): number {
    return this.data[key] ?? -1
  }

  remove(key: number): void {
    delete this.data[key]
  }
}

export {}
