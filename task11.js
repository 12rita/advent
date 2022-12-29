class Monkey {
    constructor(props) {
        this.id = props.id;
        this.testCount = props.testCount;
        this.resolveMonkey = props.resolveMonkey;
        this.rejectMonkey = props.rejectMonkey;
        this.items = [];
        this.items.push(...props.items);
        this.itemsCounter = 0;
        this.operation = props.operation;
    }

    test(worryLevel) {
        this.items.shift();
        return worryLevel % this.testCount === 0 ? this.resolveMonkey : this.rejectMonkey;
    }

    add(item) {
        this.items.push(item);
    }

}

const monkeys = [new Monkey({
    id: 0,
    items: [85, 79, 63, 72],
    testCount: 2,
    resolveMonkey: 2,
    rejectMonkey: 6,
    operation: (old) => old * 17
}), new Monkey({
    id: 1,
    items: [53, 94, 65, 81, 93, 73, 57, 92],
    testCount: 7,
    resolveMonkey: 0,
    rejectMonkey: 2,
    operation: (old) => old * old
}), new Monkey({
    id: 2,
    items: [62, 63],
    testCount: 13,
    resolveMonkey: 7,
    rejectMonkey: 6,
    operation: (old) => old + 7
}), new Monkey({
    id: 3,
    items: [57, 92, 56],
    testCount: 5,
    resolveMonkey: 4,
    rejectMonkey: 5,
    operation: (old) => old + 4
}), new Monkey({
    id: 4,
    items: [67],
    testCount: 3,
    resolveMonkey: 1,
    rejectMonkey: 5,
    operation: (old) => old + 5
}), new Monkey({
    id: 5,
    items: [85, 56, 66, 72, 57, 99],
    testCount: 19,
    resolveMonkey: 1,
    rejectMonkey: 0,
    operation: (old) => old + 6
}), new Monkey({
    id: 6,
    items: [86, 65, 98, 97, 69],
    testCount: 11,
    resolveMonkey: 3,
    rejectMonkey: 7,
    operation: (old) => old * 13
}), new Monkey({
    id: 7,
    items: [87, 68, 92, 66, 91, 50, 68],
    testCount: 17,
    resolveMonkey: 4,
    rejectMonkey: 3,
    operation: (old) => old + 2
})]

// const exampleMonkeys = [new Monkey({
//     id: 0,
//     items: [79, 98],
//     testCount: 23,
//     resolveMonkey: 2,
//     rejectMonkey: 3,
//     operation: (old) => old * 19
// }), new Monkey({
//     id: 1,
//     items: [54, 65, 75, 74],
//     testCount: 19,
//     resolveMonkey: 2,
//     rejectMonkey: 0,
//     operation: (old) => old + 6
// }), new Monkey({
//     id: 2,
//     items: [79, 60, 97],
//     testCount: 13,
//     resolveMonkey: 1,
//     rejectMonkey: 3,
//     operation: (old) => old * old
// }), new Monkey({
//     id: 3,
//     items: [74],
//     testCount: 17,
//     resolveMonkey: 0,
//     rejectMonkey: 1,
//     operation: (old) => old + 3
// })]

const getLCM = (numbers)=>{
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    let lcm = 1;

    for (const number of numbers) {
        lcm = (lcm * number) / gcd(lcm, number);
    }

    return lcm;
}

const round = (monkey) => {
    monkey.itemsCounter += monkey.items.length;
    const lcm = getLCM(monkeys.map(monkey=>monkey.testCount));
    while (monkey.items.length) {
        const currentItem = monkey.items[0];
        const newWorryLevel = monkey.operation(currentItem) % lcm;
        const resultMonkeyId = monkey.test(newWorryLevel);
        monkeys[resultMonkeyId].add(newWorryLevel);

    }
}

for (let i = 0; i < 10000; i++) {
    monkeys.forEach(monkey => round(monkey));

}



const monkeyBusiness = monkeys.map(monkey => monkey.itemsCounter).sort((a, b) => b - a);
console.log(monkeyBusiness[0] * monkeyBusiness[1])