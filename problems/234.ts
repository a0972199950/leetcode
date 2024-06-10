// 234. Palindrome Linked List

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// enum Type {
//   ODD = 'ODD',
//   EVEN = 'EVEN'
// }

// function isPalindrome(head: ListNode | null): boolean {
//   console.log(head)
//   if (!head) {
//     return false
//   }

//   if (!head.next) {
//     return true
//   }

//   let stack = []
//   let slow: ListNode | null = head
//   let fast: ListNode | null = head

//   while (fast?.next) {
//     stack.push(slow!.val)
//     slow = slow!.next
//     fast = fast.next?.next
//   }

//   const type = fast ? Type.ODD : Type.EVEN

//   if (type === Type.EVEN) {
//     if (slow!.val !== stack.at(-1)) {
//       return false
//     }

//     stack.pop()
//   }

//   slow = slow!.next

//   while (slow) {
//     if (slow.val !== stack.at(-1)) {
//       return false
//     }

//     stack.pop()
//     slow = slow.next
//   }

//   return !stack.length
// };

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return false
  }

  if (!head.next) {
    return true
  }

  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast?.next) {
    slow = slow!.next
    fast = fast.next?.next
  }

  if (slow!.next) {
    const nextNode = slow!.next
    slow!.next = null
    slow = nextNode
  }

  let next = slow?.next
  while (next) {
    const nextNode = slow!.next
    nextNode.next = slow
    slow = next
    next = next.next
  }

  console.log('head: ', head)
  console.log('tail: ', slow)

  return false
}

const input = [1, 2, 3, 4, 5, 6, 7].map(val => new ListNode(val))
for (let i = 0; i < input.length; i++) {
  input[i].next = input[i + 1] || null
}

console.log(isPalindrome(input[0]))


