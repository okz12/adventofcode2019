deal = (data, stack_size) => {
    let stack = [...Array(stack_size).keys()]
    for (line of data.split("\n")){
        if (line.trim() === 'deal into new stack'){
            stack.reverse()
        } 
        else {
            n = parseInt(line.trim().split(" ").slice(-1).pop())
            n_cards = stack.length
            if (line.trim().split(" ")[0] === "cut"){
                n = n % n_cards
                n = n >= 0 ? n : n_cards + n
                stack = [...stack.slice(n), ...stack.slice(0, n)]
            } else {
                let temp = stack.slice()
                let pos = 0
                for(card of stack){
                    let store = pos >= 0 ? pos : n_cards + pos
                    temp[store] = card
                    pos = (pos + n) % n_cards
                    if (pos < 0 && n >= 0){
                        pos = n_cards + pos
                    }
                }
                stack = temp
            }
        }
    }
    return stack
}

module.exports = {part1: deal, part2: count}

if(require.main === module){
    let fs = require('fs')
    data = Buffer.from(fs.readFileSync('input.txt')).toString()
    console.log(deal(data, 10007).indexOf(2019))
    console.log(count(data))

}