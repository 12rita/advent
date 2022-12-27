import {data3} from "./data3.js";
import _ from "lodash";

const {intersection} = _;
const backpacks = data3.split('\n');

const priorDict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
}
const totalPriorities = backpacks.reduce((acc, backpack) => {
    const set = {};
    let letter;
    for (let i = 0; i < backpack.length / 2; i++) {

        set[backpack[i]] = true

    }
    for (let i = backpack.length / 2; i < backpack.length; i++) {
        if (set[backpack[i]])
            letter = backpack[i];
    }


    return acc + priorDict[letter]
}, 0)

let sum = 0;
for (let i = 0; i<backpacks.length-2; i+=3){
    const first = backpacks[i];
    const second = backpacks[i+1];
    const third = backpacks[i+2];

    const doubleIntersect = intersection(first.split(''), second.split(''));
    const tripleIntersect = intersection(doubleIntersect, third.split(''));

    sum+=priorDict[tripleIntersect[0]]
}






console.log(sum)
