// 1507. Reformat Date

console.clear()

function reformatDate(date: string): string {
  const [day, month, year] = date.split(' ')

  const formatYear = (year: string) => year

  const formatMonth = (month: string) => {
    return {
      Jan: '01', 
      Feb: '02', 
      Mar: '03', 
      Apr: '04', 
      May: '05', 
      Jun: '06', 
      Jul: '07', 
      Aug: '08', 
      Sep: '09', 
      Oct: '10', 
      Nov: '11', 
      Dec: '12'
    }[month]
  }

  const formatDay = (day: string) => {
    let ans = ''
    for (const char of day.split('')) {
      if (!/^\d$/.test(char)) {
        break
      }

      ans += char
    }

    return ans.length === 1 ? '0' + ans : ans
  }

  return [
    formatYear(year),
    formatMonth(month),
    formatDay(day)
  ].join('-')
}

console.log(reformatDate('20th Oct 2052'))
console.log(reformatDate('6th Jun 1933'))
console.log(reformatDate('26th May 1960'))

export {}
