const fs = require('fs')

arrSum = arr => arr.reduce((a,b) => a + b, 0)

getFuel1 = d => Math.floor(d/3)-2

function getFuel2(d){
  fuelNeeded = Math.floor(d/3)-2
  return fuelNeeded <= 0 ? 0 : fuelNeeded + getFuel2(fuelNeeded)
}

module.exports = {getFuel1, getFuel2}

if (require.main === module){
  data = Buffer.from(fs.readFileSync('input.txt')).toString().split("\n").map(val => parseInt(val))
  console.log(arrSum(data.map(x => getFuel1(x))))
  console.log(arrSum(data.map(x => getFuel2(x))))
}