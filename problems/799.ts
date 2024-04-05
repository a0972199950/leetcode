// 799. Champagne Tower

console.clear()

// function champagneTower(poured: number, query_row: number, query_glass: number): number {
//   const canFillCurrentRow = (row: number, restPoured: number): number | false => {
//     const cups = row + 1

//     if (restPoured - (cups + 1) > 0) {
//       return restPoured - (cups + 1)
//     } else {
//       return false
//     }
//   }

//   const search = (row: number, restPoured: number) => {
//     const cups = row + 1

//     // 還沒到要問的層
//     if (row < query_row) {
//       console.log(row, restPoured, '還沒到要問的層')

//       // 分得滿當前層
//       if (canFillCurrentRow(row, restPoured)) {
//         console.log('分得滿當前層')
//         return search(row + 1, canFillCurrentRow(row, restPoured) as number)
//       }

//       // 分不滿當前層
//       if (!canFillCurrentRow(row, restPoured)) {
//         console.log('分不滿當前層')
//         return 0
//       }
//     }


//     // 到了要問的層
//     if (row === query_row) {
//       console.log(row, restPoured, '到了要問的層')

//       // 分得滿當前層
//       if (canFillCurrentRow(row, restPoured)) {
//         console.log('分得滿當前層')
//         return 1
//       }

//       // 分不滿當前層
//       if (!canFillCurrentRow(row, restPoured)) {
//         console.log('分不滿當前層')

//         const arr = Array(cups).fill(0)
//         let share

//         if (restPoured <= 1) {
//           share = 0
//         } else {
//           share = 1
//         }

//         for (
//           let i = 0, j = arr.length - 1;
//           i <= j;
//           i++, j--
//         ) {
//           arr[i] = share
//           arr[j] = share
//           share++
//         }

//         const divides = arr.reduce((sum, item) => sum + item, 0)
//         const unit = restPoured / divides

//         return unit * arr[query_glass]
//       }
//     }
//   }

//   return search(0, poured)
// }

function champagneTower(poured: number, query_row: number, query_glass: number): number {
  let lastcups = [poured]

  let row = 1

  while (row <= query_row) {
    // console.log(lastcups)

    const cups = Array(lastcups.length + 1).fill(null)

    for (let cup = 0; cup < cups.length; cup++) {
      cups[cup] += lastcups[cup] ? Math.max(0, (lastcups[cup] - 1) / 2) : 0
      cups[cup] += lastcups[cup - 1] ? Math.max(0, (lastcups[cup - 1] - 1) / 2) : 0
    }

    lastcups = cups
    row++
  }

  // console.log(lastcups)
  return Math.min(1, lastcups[query_glass])
}

console.log(champagneTower(1, 1, 1))
console.log(champagneTower(2, 1, 1))
console.log(champagneTower(4, 2, 0))
console.log(champagneTower(0, 0, 0))
console.log(champagneTower(25, 6, 1))

export {}
