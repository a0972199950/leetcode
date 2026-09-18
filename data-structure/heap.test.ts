import { Heap } from './heap'

console.clear()

const heap = new Heap<{ key: string, value: number }>((a, b) => a.value - b.value)

heap.push({ key: 'a', value: 41 })
heap.push({ key: 'a', value: 39 })
heap.push({ key: 'a', value: 39 })
heap.push({ key: 'a', value: 39 })
heap.push({ key: 'a', value: 39 })
heap.push({ key: 'a', value: 33 })
heap.push({ key: 'a', value: 18 })
heap.push({ key: 'a', value: 27 })
heap.push({ key: 'a', value: 12 })
heap.push({ key: 'a', value: 50 })
heap.push({ key: 'a', value: 67 })
heap.push({ key: 'a', value: 13 })
heap.push({ key: 'a', value: 44 })
heap.push({ key: 'a', value: 57 })
heap.push({ key: 'a', value: 99 })

console.log('next: ', heap.shift()) // { key: 'a', value: 12 }
console.log('next: ', heap.shift()) // { key: 'a', value: 13 }
console.log('next: ', heap.shift()) // { key: 'a', value: 18 }
console.log('next: ', heap.shift()) // { key: 'a', value: 27 }
console.log('next: ', heap.shift()) // { key: 'a', value: 33 }
console.log('next: ', heap.shift()) // { key: 'a', value: 39 }
console.log('next: ', heap.shift()) // { key: 'a', value: 39 }
console.log('next: ', heap.shift()) // { key: 'a', value: 39 }
console.log('next: ', heap.shift()) // { key: 'a', value: 39 }
console.log('next: ', heap.shift()) // { key: 'a', value: 41 }
console.log('next: ', heap.shift()) // { key: 'a', value: 44 }
console.log('next: ', heap.shift()) // { key: 'a', value: 50 }
console.log('next: ', heap.shift()) // { key: 'a', value: 57 }
console.log('next: ', heap.shift()) // { key: 'a', value: 67 }
console.log('next: ', heap.shift()) // { key: 'a', value: 99 }
console.log('next: ', heap.shift()) // undefined
console.log('next: ', heap.shift()) // undefined
console.log('next: ', heap.shift()) // undefined
console.log('next: ', heap.shift()) // undefined
console.log('next: ', heap.shift()) // undefined
