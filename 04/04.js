// It is a six-digit number.
isSixDigit = num => num.length === 6

// Two adjacent digits are the same (like 22 in 122345).
function adjacentNumber(num){
    num_list = num.split('')
    n_prev = num_list[0]
    for (const n of num_list.slice(1)){
        if (n === n_prev){
            return true
        } else {
            n_prev = n
        }
    }
    return false
}

// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
function increasingNumber(num){
    num_list = num.split('')
    n_prev = num_list[0]
    for (const n of num_list.slice(1)){
        if (parseInt(n) >= parseInt(n_prev)){
            n_prev = n
        } else {
            return false
        }
    }
    return true
}

function adjacentNumber2(num){
    num_list = num.split('')
    let curr = num_list[0]
    let curr_counter = 1

    for (const n of num_list.slice(1)){
        if (n === curr){
            curr_counter += 1
        } else if (curr_counter === 2){
            return true
        } else {
            curr_counter = 1
            curr = n
        }
    }
    return (curr_counter === 2)
}

part1 = num => isSixDigit(num) && adjacentNumber(num) && increasingNumber(num)
part2 = num => isSixDigit(num) && adjacentNumber2(num) && increasingNumber(num)

function crackPassword(min, max, func){
    let total = 0
    for (let i = min; i < max; i++){
        num = i.toString()
        if (func(num)){
            total += 1
        }
    }
    return total
}



module.exports = {part1, part2}

if (require.main === module){
    console.log(crackPassword(256310, 732736, part1))
    console.log(crackPassword(256310, 732736, part2))
}