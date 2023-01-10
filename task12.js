import {data12, example12} from "./inputs/data12.js";

const map = [];


example12.split('\n').forEach((line, y) => {
    map.push(line.split('').map((letter, x) => {
        return {x, y, charCode: letter.charCodeAt(0), optimal: false, vS: Infinity}
    }));
})

const startMark = {x: 0, y: 0, charCode: 97}
const endMark = {x: 0, y: 0, charCode: 122}
let currentPoint = endMark;

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


const counters = [];
map[endMark.y][endMark.x].charCode = 122;
map[startMark.y][startMark.x].charCode = 97;
map[startMark.y][startMark.x].vS = 0;

const queue = [map[endMark.y][endMark.x]];

let counter = 0;
const getNeighbour = (point, direction) => {
    const {x, y, charCode} = point;

    const {x: deltaX, y: deltaY} = neighbours[direction];

    if (map[y + deltaY] && map[y + deltaY][x + deltaX] && !map[y + deltaY][x + deltaX].optimal && charCode - map[y + deltaY][x + deltaX].charCode <= 1) {
        // console.log(map[y + deltaY][x + deltaX])
        return {x: x + deltaX, y: y + deltaY}
    } else return false;
}

const findMin = (filtered) => {
    let min = Infinity;
    let minX = 0;
    let minY = 0;
    filtered.forEach((line, y) => {
        line.forEach((vertex, x) => {
            if (vertex.vS < min) {
                min = vertex.vS
                minX = x;
                minY = y;
            }
        })

    })
    return {x: minX, y: minY};
}
const dijkstraAlg = () => {
    const filteredMap = [];

    map.forEach(line => {
        filteredMap.push(line.filter(vertex => !vertex.optimal));
    })
    const {x, y} = findMin(filteredMap);
    const vertex = map[y][x]
    console.log(vertex)
    vertex.optimal = true;
    Object.keys(neighbours).forEach(direction => {
        const neighbour = getNeighbour(vertex, direction);

        if (neighbour) {
            map[neighbour.y][neighbour.x].vS = Math.min(map[neighbour.y][neighbour.x].vS, vertex.vS + 1)

        }
    })

}

const path = () => {
    let startFlag = false;
    while (queue.length) {

        queue.forEach(cell => {
            cell.counters.forEach(counter => counter++);


            cell.visited = true;
            if (cell.x === startMark.x && cell.y === startMark.y) {
                startFlag = true;
                return false;
            } else {

                Object.keys(neighbours).forEach(direction => {
                    const neighbour = getNeighbour(cell, direction);

                    if (neighbour) {
                        queue.push(map[neighbour.y][neighbour.x])
                        if (map[neighbour.y][neighbour.x].visited) {
                            map[neighbour.y][neighbour.x].counters.push(...cell.counters)
                        }
                    }
                })

                console.log({queue})
                queue.shift();
                // if ()


            }


        })
        if (startFlag) {
            break;
        }

    }
}
// path();

const pathD = () => {
    const unOptimalVertexes = map.some(line => line.some(vertex => !vertex.optimal));
    // console.log(unOptimalVertexes)
    const n = map.length;
    const m = map[0].length;
    console.log(n*m)
    for (let i = 0; i < n * m; i++) {
        dijkstraAlg();
    }

}
pathD();
// console.log(map)