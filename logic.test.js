'use strict'
import * as logic from './logic'

describe('sugar scores', function(){
  const medSugarProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "3.40",
    "per100gSalt": "1.50",
    "per100gSugar": "20", // <--- this guy
    "per100gFibre": null,
    "per100gIron": null
  }
  const lowSugarProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "3.40",
    "per100gSalt": "1.50",
    "per100gSugar": "3", // <--- this guy
    "per100gFibre": null,
    "per100gIron": null
  }
  const highSugarProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "3.40",
    "per100gSalt": "1.50",
    "per100gSugar": "34", // <--- this guy
    "per100gFibre": null,
    "per100gIron": null
  }
  it('should deduct 0 points if the total sugars are < 5', function() {
    expect(logic.calculateSugarScore(lowSugarProduct)).toEqual(0)
  })
  it('should deduct 25 points if the total sugars are >5 and <22.5', function() {
    expect(logic.calculateSugarScore(medSugarProduct)).toEqual(-25)
  })
  it('should deduct 50 points if the total sugars are > 22.5', function() {
    expect(logic.calculateSugarScore(highSugarProduct)).toEqual(-50)
  })
})
