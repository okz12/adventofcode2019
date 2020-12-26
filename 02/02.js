function process_arr (arr){
  for (let i = 0; i < arr.length; i += 4){
    switch (arr[i]){
      case 1: 
        operand1 = arr[arr[i+1]]
        operand2 = arr[arr[i+2]]
        store = arr[i+3]
        arr[store] = operand1 + operand2
        break;
      case 2: 
        operand1 = arr[arr[i+1]]
        operand2 = arr[arr[i+2]]
        store = arr[i+3]
        arr[store] = operand1 * operand2
        break;
      case 99: 
        return arr
      default:
        throw arr[i] + " not in opcodes"
    }
  }
  return arr
}

function finder(arr, n, v){
  let arr_cp = arr.slice(0)
  arr_cp[1] = n
  arr_cp[2] = v
  return process_arr(arr_cp)[0]
}

module.exports = {process_arr}

if (require.main === module){
  let fs = require('fs')
  data = Buffer.from(fs.readFileSync('input.txt')).toString().split(",").map(val => parseInt(val))
  data[1] = 12
  data[2] = 2
  console.log(process_arr([...data])[0])

  y = 19690720
  x1 = finder(data, 1, 0) - finder(data, 0, 0)
  c = finder(data, 0, 0)
  noun = Math.floor((y-c)/x1)
  verb = y-c - (noun * x1)
  console.log(noun*100 + verb)
  // console.log(finder(data, 31, 46))
}