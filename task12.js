import {data12} from "./inputs/data12.js";

const map = [];


data12.split('\n').forEach((line, y) => {
    map.push(line.split('').map((letter, x) => {
        return {x, y, charCode: letter.charCodeAt(0), visited: false, letter, counter: 0}
    }));
})

const startMark = {x: 0, y: 0, charCode: 97}
const endMark = {x: 0, y: 0, charCode: 122}

map.forEach((line, idx) => {
    const start = line.findIndex((point) => point.charCode === 83);//'S'
    const end = line.findIndex((point) => point.charCode === 69);//'E'
    // console.log(line)
    if (start !== -1) {
        startMark.x = start;
        startMark.y = idx
    }
    if (end !== -1) {
        endMark.x = end;
        endMark.y = idx;
    }
})

const neighbours = {
    R: {
        x: 1,
        y: 0
    },
    L: {
        x: -1,
        y: 0
    },
    U: {
        x: 0,
        y: 1,
    },
    D: {
        x: 0,
        y: -1
    }
}


map[endMark.y][endMark.x].charCode = 122;
map[startMark.y][startMark.x].charCode = 97;
map[startMark.y][startMark.x].vS = 0;

const queue = [map[endMark.y][endMark.x]];

const getNeighbour = (point, direction) => {
    const {x, y, charCode} = point;

    const {x: deltaX, y: deltaY} = neighbours[direction];

    if (map[y + deltaY] && map[y + deltaY][x + deltaX] && !map[y + deltaY][x + deltaX].visited && charCode - map[y + deltaY][x + deltaX].charCode <= 1) {
        // console.log(map[y + deltaY][x + deltaX])
        return {x: x + deltaX, y: y + deltaY}
    } else return false;
}


const bfs = () => {
    while (queue.length) {
        const cell = queue[0];

        if (!cell.visited) {
            Object.keys(neighbours).forEach(direction => {
                const neighbour = getNeighbour(cell, direction);

                if (neighbour) {

                    map[neighbour.y][neighbour.x].counter = cell.counter + 1;

                    queue.push(map[neighbour.y][neighbour.x])

                }
            })
        }


        // console.log({cell, queue})
        cell.visited = true;

        queue.shift();

    }
}
// path();

bfs();
console.log(map[startMark.y][startMark.x])
const shortestFromA = map.flat(1).filter(item => item.charCode === 97).sort((a, b) => a.counter - b.counter).find(v => v.counter)
// console.log(shortestFromA[0], shortestFromA[1])
console.log(shortestFromA)
