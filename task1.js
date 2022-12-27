import {data} from "./inputs/data.js";


export const elves = data.split('\n\n')
let max = 0;
elves.forEach((elv) => {

    const elfSum = elv.split('\n').reduce((acc, item) => acc + Number(item), 0);

    if (elfSum > max) {
        max = elfSum;
    }

})
console.log(max);
const elvesCalories =  elves.map((elv) => {

    return elv.split('\n').reduce((acc, item) => acc + Number(item), 0);

})
elvesCalories.sort((a,b)=>b-a);
console.log(elvesCalories[0] + elvesCalories[1] + elvesCalories[2]);


console.log(max)
