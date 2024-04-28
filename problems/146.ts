// 146. LRU Cache

console.clear()

class Node {
  key: number
  val: number
  prev: Node | null = null
  next: Node | null = null

  constructor (key: number, val: number) {
    this.key = key
    this.val = val
  }
}

class LRUCache {
  capacity: number
  size = 0
  map: Record<number, Node> = {}
  head: Node | null = null
  tail: Node | null = null

  constructor (capacity: number) {
    this.capacity = capacity
  }

  bringToBack (node: Node) {
    if (this.tail === node) {
      return
    }

    if (this.head === node) {
      this.head = this.head.next
    }

    node.prev && (node.prev.next = node.next)
    node.next && (node.next.prev = node.prev)
    this.tail.next = node
    node.prev = this.tail
    node.next = null
    this.tail = node
  }

  get(key: number): number {
    const node = this.map[key]

    if (!node) {
      return -1
    }

    this.bringToBack(node)
    return node.val
  }

  put(key: number, value: number): void {
    if (this.size === 0) {
      const newNode = new Node(key, value)
      this.map[key] = newNode
      this.head = newNode
      this.tail = newNode
      this.size++

      return
    }

    const node = this.map[key]

    if (!node) {
      const newNode = new Node(key, value)
      this.map[key] = newNode
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
      this.size++

      if (this.size > this.capacity) {
        delete this.map[this.head.key]
        this.head = this.head.next
        this.head.prev = null
        this.size--
      }
      
      return
    }

    node.val = value
    this.bringToBack(node)
  }
}

// const lRUCache = new LRUCache(2)
// console.log(lRUCache.put(1, 1)) // cache is {1=1}
// console.log(lRUCache.put(2, 2)) // cache is {1=1, 2=2}
// console.log(lRUCache.get(1))    // return 1
// console.log(lRUCache.put(3, 3)) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2))    // returns -1 (not found)
// console.log(lRUCache.put(4, 4)) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1))    // return -1 (not found)
// console.log(lRUCache.get(3))    // return 3
// console.log(lRUCache.get(4))    // return 4

const lRUCache = new LRUCache(2)
console.log(lRUCache.put(2, 1))
console.log(lRUCache.put(2, 2))
console.log(lRUCache.get(2))
console.log(lRUCache.put(1, 1))
console.log(lRUCache.put(4, 1))
console.log(lRUCache.get(2))


export {}
