export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  print() {
    const values = [this.val]
    const visited = new Set<ListNode>([this])

    for (let node = this.next; node; node = node.next) {
      values.push(node.val)

      if (visited.has(node)) {
        break
      }

      visited.add(node)
    }

    console.log(values)

    return this
  }
}

export class LinkedList {
  head: ListNode | null = null

  constructor (val: number[], cycleIndex?: number) {
    let prev: ListNode | null = null
    const nodes: ListNode[] = []

    for (const num of val) {
      const node = new ListNode(num)
      nodes.push(node)

      if (!this.head) {
        this.head = node
      }

      prev && (prev.next = node)
      prev = node
    }

    if (prev && cycleIndex !== undefined && nodes[cycleIndex]) {
      prev.next = nodes[cycleIndex]
    }
  }
}
