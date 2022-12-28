import {data9} from "./inputs/data9.js";

const commands = data9.split('\n');


// const head = {
//     x: 0,
//     y: 0
// }
// const tail = {
//     x: 0,
//     y: 0
// }
const visitedPoints = {};
// visitedPoints['0-0'] = true;

const rope = [];
for (let i = 0; i < 10; i++) {
    rope[i] = {x: 0, y: 0, id:i};
}

const checkTouch = (head, tail) => {
    const {x: hx, y: hy} = head;
    const {x: tx, y: ty} = tail
    return Math.abs(hx - tx) <= 1 && Math.abs(hy - ty) <= 1;
}

const moveDict = {
    '02': {x: 0, y: 1},
    '12': {x: 1, y: 1},
    '21': {x: 1, y: 1},
    '20': {x: 1, y: 0},
    '2-1': {x: 1, y: -1},
    '1-2': {x: 1, y: -1},
    '0-2': {x: 0, y: -1},
    '-1-2': {x: -1, y: -1},
    '-2-1': {
        x: -1, y: -1
    },
    '-20': {
        x: -1, y: 0
    },
    '-21': {
        x: -1, y: 1
    },
    '-12': {
        x: -1, y: 1
    },
    '22': {
        x: 1, y: 1
    },
    '2-2':   {
        x: 1, y: -1
    },
    '-2-2':{
        x: -1, y: -1
    },
    '-22':{
        x: -1, y: 1
    },


}


const countMove = (head, tail) => {
    // console.log(`head: ${head.x},${head.y}`)
    // console.log(`tail: ${tail.x},${tail.y}`)
    // console.log(`dist vect: ${head.x - tail.x},${head.y - tail.y}`)
    return moveDict[`${head.x - tail.x}${head.y - tail.y}`]
    // return {x: head.x - tail.x, y: head.y - tail.y}
}

const moveTail = (head, tail) => {

    if (!checkTouch(head, tail)) {
        // console.log({head, tail});
        const {x, y} = countMove(head, tail);
        tail.x = tail.x + x;
        tail.y = tail.y + y;
        // visitedPoints[`${tail.x}${tail.y}`] = true;
    }
}

const directions = {
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
const moveHead = (head, direction) => {
    const {x, y} = directions[direction]
    head.x = head.x + x;
    head.y = head.y + y;
}

commands.forEach(command => {
    // console.log(command)
    const [direction, count] = command.split(' ');
    for (let i = 0; i < Number(count); i++) {
        moveHead(rope[0], direction);
        for (let j = 0; j < rope.length - 1; j++) {
            moveTail(rope[j], rope[j + 1]);
            // console.log('2',rope[j], rope[j + 1])
        }

        visitedPoints[`${rope[rope.length - 1].x}-${rope[rope.length - 1].y}`] = true;
    }
    // console.log(rope)

    // if (direction === 'R') {
    //     for (let i = 0; i < Number(count); i++) {
    //         for (let j = 0; j< rope.length; j++){
    //             rope[0].x++;
    //
    //         }
    //         head.x++;
    //         moveTail();
    //     }
    // } else if (direction === 'D') {
    //     for (let i = 0; i < Number(count); i++) {
    //         head.y--;
    //         moveTail();
    //     }
    // } else if (direction === 'L') {
    //     for (let i = 0; i < Number(count); i++) {
    //         head.x--;
    //         moveTail();
    //     }
    // } else if (direction === 'U') {
    //     for (let i = 0; i < Number(count); i++) {
    //         head.y++;
    //         moveTail();
    //     }
    // }
})
// console.log(visitedPoints);
console.log(Object.keys(visitedPoints).length);


