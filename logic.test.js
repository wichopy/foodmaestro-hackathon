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

describe('iron scores', function(){
  const lowIronProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "3.40",
    "per100gSalt": "1.50",
    "per100gSugar": "20", // <--- this guy
    "per100gFibre": null,
    "per100gIron": 6
  }
  const medIronProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "3.40",
    "per100gSalt": "1.50",
    "per100gSugar": "3", // <--- this guy
    "per100gFibre": null,
    "per100gIron": 3
  }
  const highIronProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "3.40",
    "per100gSalt": "1.50",
    "per100gSugar": "34", // <--- this guy
    "per100gFibre": null,
    "per100gIron": 1
  }
  it('should deduct 0 points if the total iron is > 4.4 mg', function() {
    expect(logic.calculateIronScore(lowIronProduct)).toEqual(0)
  })
  it('should deduct 25 points if the total iron is < 4.4 and >= 2.2', function() {
    expect(logic.calculateIronScore(medIronProduct)).toEqual(-2.5)
  })
  it('should deduct 50 points if the total sugars are > 22.5', function() {
    expect(logic.calculateIronScore(highIronProduct)).toEqual(-5)
  })
})

describe('fat scores', function(){
  const lowFatProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "1",
    "per100gSalt": "1.50",
    "per100gSugar": "20", // <--- this guy
    "per100gFibre": null,
    "per100gIron": 6
  }
  const medFatProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "15",
    "per100gSalt": "1.50",
    "per100gSugar": "3", // <--- this guy
    "per100gFibre": null,
    "per100gIron": 3
  }
  const highFatProduct =   {
    "ProductAttributeID": "6",
    "ProductAttributeGUID": "2770760a-4457-4cda-a191-d06fbab26f2d",
    "ProductID": "116694",
    "per100gFat": "20",
    "per100gSalt": "1.50",
    "per100gSugar": "34", // <--- this guy
    "per100gFibre": null,
    "per100gIron": 1
  }
  it('should deduct 0 points if the total iron is > 4.4 mg', function() {
    expect(logic.calculateFatScore(lowFatProduct)).toEqual(0)
  })
  it('should deduct 25 points if the total iron is < 4.4 and >= 2.2', function() {
    expect(logic.calculateFatScore(medFatProduct)).toEqual(-5)
  })
  it('should deduct 50 points if the total sugars are > 22.5', function() {
    expect(logic.calculateFatScore(highFatProduct)).toEqual(-10)
  })
})
