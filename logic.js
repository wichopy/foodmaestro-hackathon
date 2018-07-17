/**
 * Below are exported functions that are used to score a food product 
 */

 // This function is for accounting for sugar in the product score
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

// This function is for accounting for Fibre in the product score
export const calculateFibreScore = (product) => {
  const fibreContent = product.per100gFibre

  if (fibreContent) {
    if  (fibreContent >= 6) {
      return 0
    } else if (fibreContent < 6 && fibreContent >= 3) {
      return -15
    } else if (fibreContent < 3) {
      return -30
    }
  }
}


// This function is for accounting for Salt in the product score
export const calculateSaltScore = (product) => {
  const saltContent = product.per100gSalt

  if (saltContent) {
    if (saltContent <= 0.3) {
      return 0
    } else if (saltContent > 0.3 && saltContent <= 1.5) {
      return -2.5
    } else if (saltContent >= 1.5) {
      return -5
    }
  }
}