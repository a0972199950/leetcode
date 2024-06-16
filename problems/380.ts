// 380. Insert Delete GetRandom O 1

export {}
console.clear()

class RandomizedSet {
  map = new Map()
  data = []

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false
    }

    this.data.push(val)
    this.map.set(val, this.data.length - 1)
    return true
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false
    }

    const index = this.map.get(val)
    this.data[index] = this.data.at(-1)
    this.data.pop()
    
    this.map.set(this.data[index], index)
    this.map.delete(val)
    return true
  }

  getRandom(): number {
    const random = Math.floor(Math.random() * this.data.length)

    return this.data[random]
  }
}

const randomizedSet = new RandomizedSet()

console.log(randomizedSet.insert(1))
console.log(randomizedSet.remove(2))
console.log(randomizedSet.insert(2))
console.log(randomizedSet.getRandom())
console.log(randomizedSet.remove(1))
console.log(randomizedSet.insert(2))
console.log(randomizedSet.getRandom())


