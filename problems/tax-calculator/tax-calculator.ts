// Tax Calculator
// 自訂題目（非 LeetCode 原題）：計算進口稅、貨物稅、營業稅

export {}
console.clear()

const getTax = (price) => {
  const getJinKoTax = () => {
    return Math.round(price * 0.1)
  }

  const getProductTax = () => {
    return 0
    return (price + getJinKoTax()) * 0.13
  }

  const getEiGyouTax = () => {
    return Math.round((price + getJinKoTax() + getProductTax()) * 0.05)
  }

  console.log('進口稅: ', getJinKoTax())
  console.log('貨物稅: ', getProductTax())
  console.log('營業稅: ', getEiGyouTax())
  console.log('營業稅稅基: ', price + getJinKoTax() + getProductTax())
  console.log('總額: ', getJinKoTax() + getProductTax() + getEiGyouTax())
}

getTax(35676)


