import {data10} from "./inputs/data10.js";


const instructions = data10.split('\n');

let x = 1;

const addStack = [];
const memory = [1];


let cycleIndex = 0;

function* commandGenerator() {
    for (let i = 0; i < instructions.length; i++) {
        yield instructions[i];
    }
}

const generator = commandGenerator();
let generatorDone = false;

while (!generatorDone) {

    if (addStack.length) {
        x += addStack.pop();

    } else {
        const next = generator.next();
        if (next.done) {
            generatorDone = true;
            break;

        } else {
            const [command, count] = next.value.split(' ')
            if (command === 'addx') {
                addStack.push(Number(count));
            }
        }
    }
    cycleIndex++;
    memory[cycleIndex] = x;

}


let totalStrength = 0;
for (let i = 19; i < memory.length; i += 40) {
    const signalStrength = memory[i] * (i + 1);
    totalStrength += signalStrength;
}

let result = ''
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 40; j++) {

        const spritePos = [memory[j + 40 * i] - 1, memory[j + 40 * i], memory[j + 40 * i] + 1];
        if (spritePos.includes(j))
            result += '#'
        else result += '.'

    }
    result += '\n'
}
console.log(result)
