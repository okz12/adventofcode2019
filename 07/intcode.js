// ENUM
let OPCODE = {
    ADD : 1,
    MULTIPLY : 2,
    STORE_INPUT : 3,
    SEND_TO_OUTPUT : 4,
    JUMP_IF_TRUE: 5,
    JUMP_IF_FALSE: 6,
    LESS_THAN : 7,
    EQUALS : 8,
    END_PROGRAM : 99
}

class IntCode {
    constructor(instructions, phases){
        this.memory = instructions
        this.inputs = phases
        this.pointer = 0
        this.terminated = false
    }

    getParameter (parameterMode, position){
        return parameterMode === 0 ? this.memory[this.memory[position]] : this.memory[position]
    }

    run (input) {
        let {memory, inputs} = this
        inputs.push(input)
        let output = null
        while(!this.terminated){
            let instruction = memory[this.pointer].toString().padStart(5, '0')
            let opcode = Number(instruction.slice(3,5))
            let {parameter1, parameter2, parameter3} = [null, null, null]

            // fetch relevant parameters by opcode
            if ([1, 2, 3, 4, 5, 6, 7, 8].includes(opcode)){
                parameter1 = this.getParameter(Number(instruction[2]), this.pointer+1)
            }
            if (opcode===3){
                parameter1 = memory[this.pointer+1]
            }
            if ([1, 2, 5, 6, 7, 8].includes(opcode)){
                parameter2 = this.getParameter(Number(instruction[1]), this.pointer+2)
            }
            if ([1, 2, 7, 8].includes(opcode)){
                parameter3 = memory[this.pointer+3]
            }

            // console.log(this.pointer, this.inputs, memory.join(', '), opcode, parameter1, parameter2, parameter3)

            switch(opcode){
                case OPCODE.ADD:
                    memory[parameter3] = parameter1 + parameter2
                    this.pointer += 4
                    break;
                    
                case OPCODE.MULTIPLY:
                    memory[parameter3] = parameter1 * parameter2
                    this.pointer += 4
                    break;

                case OPCODE.STORE_INPUT:
                    memory[parameter1] = inputs.shift()
                    this.pointer += 2
                    break;
    
                case OPCODE.SEND_TO_OUTPUT: 
                    output = parameter1
                    this.pointer += 2
                    return output
                    break;
    
                case OPCODE.JUMP_IF_TRUE:
                    this.pointer = parameter1 != 0 ? parameter2 : this.pointer + 3
                    break;
    
                case OPCODE.JUMP_IF_FALSE:
                    this.pointer = parameter1 == 0 ? parameter2 : this.pointer + 3
                    break;
    
                case OPCODE.LESS_THAN:
                    memory[parameter3] = parameter1 < parameter2 ? 1 : 0
                    this.pointer += 4
                    break;
    
                case OPCODE.GREATER_THAN:
                    memory[parameter3] = parameter1 > parameter2 ? 1 : 0
                    this.pointer += 4
                    break;

                case OPCODE.EQUALS:
                    memory[parameter3] = parameter1 === parameter2 ? 1 : 0
                    this.pointer += 4
                    break;
    
                case OPCODE.END_PROGRAM:
                    this.terminated = true
                    return inputs[0]
                    break;

                default:
                    throw (`opcode undefined ${opcode}`)
            }
        }
    }
}

module.exports = IntCode;