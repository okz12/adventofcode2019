IntCode = require('./intcode')

line_to_ascii = line => line.split("").map(x => x.charCodeAt(0))
ascii_to_line = line => [...String.fromCharCode.apply(null, line)]
WALK = `NOT A J
NOT B T
OR T J
NOT C T
OR T J
AND D J
WALK
`

RUN = `NOT A J
NOT B T
OR T J
NOT C T
OR T J
AND D J
NOT E T
NOT T T
OR H T
AND T J
RUN
`

compGo = (instructions, data) => {
    let intcode = new IntCode(instructions.slice(), line_to_ascii(data))
    while (true){
        let res = intcode.run()
        process.stdout.write(`${(res < 256)? String.fromCharCode(res) : res} `);
        if (res === undefined){break}

    }
}

if (require.main === module) {
    let fs = require('fs')
    program = Buffer.from(fs.readFileSync('input.txt')).toString().split(",").map(x => parseInt(x))

    //part 1
    compGo(program, RUN)

    //part 2
    compGo(program, WALK)
}