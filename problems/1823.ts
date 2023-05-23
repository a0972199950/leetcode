// 1823. Find the Winner of the Circular Game

// function findTheWinner(n: number, k: number): number {
//   class Node {
//     val!: number
//     next: ListNode | null
//     constructor (val: number) {
//       this.val = val
//     }
//   }

//   let head = null
//   let current = null
//   let previous = null

//   for (let friend = 1; friend <= n; friend++) {
//     const node = new Node(friend)

//     if (!head) {
//       head = node
//       current = node
//       continue
//     }

//     previous = current
//     current.next = node
//     current = current.next
//   }

//   previous = current
//   current.next = head
//   current = current.next // back to head

//   while (current) {
//     for (let count = 1; count <= k - 1; count++) {
//       previous = current
//       current = current.next
//     }

//     if (current.next === previous) {
//       previous.next = null
//     } else {
//       previous.next = current.next
//     }

//     current = previous.next
//   }

//   return previous.val
// }

function findTheWinner(n: number, k: number): number {
  const friendsQueue = Array.from(Array(n)).map((_item, index) => index + 1)

  while (friendsQueue.length > 1) {
    for (let count = 1; count <= k; count++) {
      const friend = friendsQueue.shift()

      if (count !== k) {
        friendsQueue.push(friend)
      }
    }

    console.log(friendsQueue)
  }

  return friendsQueue[0]
}

// findTheWinner(5, 2)
findTheWinner(6, 5)

export {}