let IntCode = require('./intcode.js')

sensorboost = (instructions, inputs) => {
    let outputs = []
    let output = 0
    intcode = new IntCode(instructions, inputs)
    while (!(typeof output === "undefined")){
        output = intcode.run()
        if (!(typeof output === "undefined")){
            outputs.push(output)
         }   
    }
    return outputs
}

module.exports = sensorboost

if (require.main === module) {
    let fs = require('fs')
    data = Buffer.from(fs.readFileSync('input.txt')).toString().split(",").map(val => parseInt(val))

    // part 1
    console.log(sensorboost(data, [1])[0])

    // part 2
    console.log(sensorboost(data, [2])[0])
  }