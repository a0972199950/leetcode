// 707. Design Linked List
import { ListNode } from '../data-structure/LinkedList'

console.clear()

class MyLinkedList {
  data: ListNode | null = null
  size = 0

  get(index: number): number {
    let i = 0
    let current = this.data

    while (i < index && current) {
      i++
      current = current.next
    }

    return (current?.val ?? -1)
  }

  addAtHead(val: number): void {
    const node = new ListNode(val)
    node.next = this.data
    this.data = node
    this.size++
  }

  addAtTail(val: number): void {
    const node = new ListNode(val)
    let current = this.data

    while (current?.next) {
      current = current.next
    }

    if (!current) {
      this.data = node
    } else {
      current.next = new ListNode(val)
    }

    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return
    }
    else if (index === this.size) {
      this.addAtTail(val)
      return
    }
    else if (index === 0) {
      this.addAtHead(val)
      return
    }
    else {
      const node = new ListNode(val)
      let i = 0
      let prev = null
      let current = this.data

      while (i < index && current) {
        i++
        prev = current
        current = current.next
      }

      prev.next = node
      node.next = current
      this.size++
    }
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size) {
      return
    }
    else if (index === 0) {
      this.data = (this.data?.next ?? null)
      this.size--
      return
    }
    else {
      let i = 0
      let prev = null
      let current = this.data

      while (i < index && current) {
        i++
        prev = current
        current = current.next
      }

      prev.next = (current?.next ?? null)
      this.size--
    }
  }
}

const obj = new MyLinkedList()
obj.addAtHead(4)
console.log(obj.get(1))
// console.log(obj.data)
// obj.addAtIndex(1, 2)
// console.log(obj.data)
// console.log(obj.get(1))
// obj.deleteAtIndex(0)
// console.log(obj.data)
// console.log(obj.get(0))

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

export {}
