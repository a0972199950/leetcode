class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

class LinkedList {
  data: ListNode

  constructor (val: number[]) {
    const nodes = val.map(num => new ListNode(num))

    if (nodes.length) {
      nodes.reduce((prev, next) => prev.next = next)
    }

    this.data = nodes[0] || null
  }
}

export { ListNode, LinkedList }
