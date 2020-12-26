

if (require.main === module) {
    let fs = require('fs')
    program = Buffer.from(fs.readFileSync('input.txt')).toString().split(",").map(x => parseInt(x))
    let x = process.stdin
    console.log(x)
}