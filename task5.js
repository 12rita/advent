import {data5} from "./data5.js";


const stacks = {
    1: ['N', 'D', 'M', 'Q', 'B', 'P', 'Z'],
    2: ['C', 'L', 'Z', 'Q', 'M', 'D', 'H', 'V'],
    3: ['Q', 'H', 'R', 'D', 'V', 'F', 'Z', 'G'],
    4: ['H', 'G','D','F','N'],
    5: ['N','F', 'Q'],
    6: ['D','Q','V', 'Z', 'V','B','T'],
    7:['Q', 'M', 'T', 'Z', 'D', 'V', 'S', 'H'],
    8: ['M', 'G', 'F', 'P', 'N', 'Q'],
    9: ['B', 'W', 'R', 'M']
};



const commands = data5.split('\n');

commands.forEach(command=>{
    const words = command.split(' ');
    const count = words[1];
    const from = words[3];
    const to = words[5];

    const crates = stacks[from].splice(stacks[from].length-count, count);
// console.log({count, from, to, stacks})
    stacks[to].push(...crates)
})

console.log(stacks)
