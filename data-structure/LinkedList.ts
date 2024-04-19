class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

class LinkedList {
  head: ListNode

  constructor (val: number[]) {
    const nodes = val.map(num => new ListNode(num))

    if (nodes.length) {
      nodes.reduce((prev, next) => prev.next = next)
    }

    this.head = nodes[0] || null
  }
}

export { ListNode, LinkedList }
