

export const calculateSugarScore = (product) => {
  const sugarContent = product.per100gSugar
  if (sugarContent <= 5) {
    return 0
  } else if (sugarContent > 5 && sugarContent <= 22.5) {
    return -25
  } else {
    return -50
  }
}
