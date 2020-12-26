const IntCode = require('./intcode')

process = (program, part) => {
        let N = 50
        let output_queues = [...Array(N).keys()].map(x => [])
        let Computers = [...Array(N).keys()].map(x => new IntCode(program.slice(), [x]))
    
        let nat = {}
        let idle_ids = new Set()
        let values = new Set()

        while (true){
            for (let i = 0; i < 50; i++){

                let out = Computers[i].run()
                    if (out === -1){
                        if (part === 2){
                            idle_ids.add(i)
                            if (idle_ids.size === 50){
                                let x = nat.x
                                let y = nat.y
                                Computers[0].inputs.push(x)
                                Computers[0].inputs.push(y)
                                if (values.has(y)){
                                    return y
                                }
                                values.add(y)
                                idle_ids.clear()
                            }
                        }
                    } else {
                        output_queues[i].push(out)
                        if (part === 2){
                            idle_ids.clear()
                        }
                }

                if (output_queues[i].length === 3){
                    let address = output_queues[i].shift()
                    let x = output_queues[i].shift()
                    let y = output_queues[i].shift()
                    if (address === 255){
                        if (part === 1){
                            return y
                        } else {
                            nat = {x, y}
                        }
                    } else {
                        Computers[address].inputs.push(x)
                        Computers[address].inputs.push(y)
                    }
                }

        }
    }
}

if (require.main === module) {
    let fs = require('fs')
    program = Buffer.from(fs.readFileSync('input.txt')).toString().split(",").map(x => parseInt(x))
    console.log(process(program, 1))
    console.log(process(program, 2))
}