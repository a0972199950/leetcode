export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  print() {
    const values = [this.val]

    for (let node = this.next; node; node = node.next) {
      values.push(node.val)
    }

    console.log(values)

    return this
  }
}

export class LinkedList {
  head: ListNode | null = null

  constructor (val: number[]) {
    let prev: ListNode | null = null

    for (const num of val) {
      const node = new ListNode(num)

      if (!this.head) {
        this.head = node
      }

      prev && (prev.next = node)
      prev = node
    }
  }
}
