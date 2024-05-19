// 0005. 

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

export {}
