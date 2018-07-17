

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

export const calculateIronScore = (product) => {
  const ironContent = product.per100gIron
  if (ironContent >= 4.4) {
    return 0
  } else if (ironContent < 4.4 && ironContent >= 2.2) {
    return -2.5
  } else {
    return -5
  }
}
