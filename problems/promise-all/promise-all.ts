// promise-all. custom

export {}
console.clear()

type Arg = Promise<any> | any

const myPromiseAll = (input: Arg[]) => {
  let resolve = null
  let reject = null

  const result: any[] = Array(input.length).fill(null)
  let resolveCount = 0

  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })

  for (let i = 0; i < input.length; i++) {
    const fn = input[i]

    Promise.resolve(fn)
      .then((data) => {
        result[i] = data
        resolveCount++
        if (resolveCount === input.length) {
          resolve(result)
        }
      })
      .catch((err) => {
        reject(err)
      })
  }

  if (resolveCount === input.length) {
    resolve(result)
  }

  return promise
}

myPromiseAll(['a', 'b', 'c']).then(console.log)
myPromiseAll([]).then(console.log)

// myPromiseAll([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(3)
// ]).then(console.log)

// myPromiseAll([
//   new Promise(res => setTimeout(() => res('slow'), 200)),
//   new Promise(res => setTimeout(() => res('fast'), 50))
// ]).then(console.log)

// myPromiseAll([
//   Promise.resolve(1),
//   Promise.reject('error!'),
//   Promise.resolve(3)
// ]).catch(console.log)

// myPromiseAll([
//   Promise.resolve(1),
//   'hello' as any,
//   Promise.resolve(3)
// ]).then(console.log)

myPromiseAll([]).then(console.log)
