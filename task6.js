import {data6} from "./inputs/data6.js";

const letters = data6.split('');
let answer;
for (let i = 0; i< letters.length; i++){
    const difs = {};
    for (let j = 0; j<14; j++){
        difs[letters[i+j]]=true;
    }

    if (Object.keys(difs).length === 14){

        answer = i+14;
        break;
    }
}
console.log(answer)
