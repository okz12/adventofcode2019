const fs = require('fs')

get_x = location => parseInt(location.split(".")[0])
get_y = location => parseInt(location.split(".")[1])
store = (x, y) => x + "." + y
manhattan = location => Math.abs(get_x(location))+ Math.abs(get_y(location))

function move(wire_moves){
    let wire = new Set()
    let location = store(0, 0)
    let step = 0
    let loc_step = {}


    for (const move of wire_moves){
        let direction = move[0]
        let distance = parseInt(move.slice(1))

        for(let i = 0; i < distance; i++){
            step += 1
            x = get_x(location)
            y = get_y(location)
            switch(direction){
                case "R":
                    x += 1
                    break;
                case "L":
                    x -= 1
                    break;
                case "U":
                    y += 1
                    break;
                case "D":
                    y -= 1
                    break;
                default:
                    throw "Error - dir not correct: " + direction
                }
            location = store(x, y)
            if (!(location in loc_step)){
                loc_step[location] = step
            }
            wire.add(location)
            }
    }

    return [wire, loc_step]
}

function closest_manhattan(w1, w2){
    const [w1_set, w1_step]  = move(w1)
    const [w2_set, w2_step] = move(w2)
    let intersection = new Set(Array.from(w2_set).filter(x => w1_set.has(x)))
    p1 = Math.min(...Array.from(intersection).map(manhattan))
    p2 = Math.min(...Array.from(intersection).map(loc => w1_step[loc] + w2_step[loc]))
    return {p1, p2}
}

module.exports = closest_manhattan

if (require.main === module){
    var data = Buffer.from(fs.readFileSync('input.txt')).toString().split("\n")
    var w1 = data[0].split(",")
    var w2 = data[1].split(",")
    console.log(closest_manhattan(w1, w2))
}