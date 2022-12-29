import {data12} from "./inputs/data12.js";

const map = [];
data12.split('\n').forEach(line => {
    map.push(line.split(''));
})

const startMark = {x: 0, y: 0, charCode:97}
const endMark = {x: 0, y: 0, charCode: 122}
let currentPoint = endMark;

map.forEach((line, idx) => {
    const start = line.findIndex('S');
    const end = line.findIndex('E')
    if (start !== -1) {
        startMark.x = start;
        startMark.y = idx
    }
    if (end !== -1) {
        endMark.x = end;
        endMark.y = idx;
    }
})

const checkNeighborhood = (currPoint, destPoint) =>{
    return destPoint.charCodeAt(0)
}
const counters = [];
const path = ()=>{
    let counter = 0;
    if (currentPoint === startMark){
        counters.push(counter);
        return 1;
    }
    else if (currentPoint === {x:0, y:0}){
        return;
    }
    if (checkUp){
        return counter + step(up)
    }
    if (checkRight()){
        stepRight
    }
    if (checkLeft){
        step(left)
    }
    if (checkDown){
        step(down)
    }

}
