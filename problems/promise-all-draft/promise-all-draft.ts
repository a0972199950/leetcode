// Promise.all Draft
// 自訂題目（非 LeetCode 原題）：實作 Promise.all 的早期草稿版本（另見 promise-all/ 資料夾的完整版）

export {}
console.clear()

// function fn1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() =&gt; {
//       resolve(1)
//     }, 1000);
//   })
// }
// function fn2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() =&gt; {
//       resolve(2)
//     }, 2000);
//   })
// }
// PromiseAll([fn1(), fn2()]).then(res => {
//   console.log(res)
// }).catch(err =&gt; {
//   console.log(err)
// })

// Promise.all([fn1(), fn2()]).then(res => {
//   console.log(res)
// }).catch(err=&gt;{
//   console.log(err)
// }>

const PromiseAll = async (promises: Promise<any>[]): Promise<any> => {
  const result = Array(promises.length).fill(null)
  let resolveAll
  let rejectAll

  const allDone = new Promise((resolve, reject) => {
    resolveAll = resolve
  })

  const done = () => {
    if (result.every((item) => item !== null)) {
      resolveAll()
    }
  }

  const fail = () => {

  }

  promises.forEach((promise, index) => {
    promise
      .then((data) => {
        result[index] = data
        done()
      })
      .catch((err) => {
        fail(err)
      })
  })

  await allDone
  return result
}


