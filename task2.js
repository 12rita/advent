import {data2} from './data2.js';

const rounds = data2.split('\n');


const dictionary = {
    A: 'rock',
    X: 'rock',
    B: 'paper',
    Y: 'paper',
    C: 'scissors',
    Z: 'scissors'
}

const wordsToLetters = {
    'rock': 'X',
    'paper': 'Y',
    'scissors': 'Z'
}

const shapeScore = {
    'X': 1,
    'A': 1,
    'Y': 2,
    'B': 2,
    'Z': 3,
    'C': 3
}
const getWinner = (choice) => {
    switch (choice) {
        case 'rock':
            return 'paper'
        case 'paper':
            return 'scissors'
        case 'scissors':
            return 'rock'
    }
}

const getLooser = (choice) => {
    switch (choice) {
        case 'rock':
            return 'scissors'
        case 'paper':
            return 'rock'
        case 'scissors':
            return 'paper'
    }
}

const checkWinner = (choiceA, choiceB) => {
    if (choiceA === choiceB) {
        return 'draw'
    } else if (choiceA === 'rock') {
        if (choiceB === 'paper') {
            return 'paper'
        }
        if (choiceB === 'scissors') {
            return 'rock'
        }
    } else if (choiceA === 'paper') {
        if (choiceB === 'rock') {
            return 'paper'
        }
        if (choiceB === 'scissors') {
            return 'scissors'
        }
    } else {
        if (choiceB === 'paper') {
            return 'scissors'
        }
        if (choiceB === 'rock') {
            return 'rock'
        }
    }
}
const total = rounds.reduce((acc, round) => {
    const [choiceA, choiceB] = round.split(' ');
    const winner = checkWinner(dictionary[choiceA], dictionary[choiceB]);
    acc += shapeScore[choiceB];

    if (winner === 'draw') {
        return acc + 3
    } else if (dictionary[choiceB] === winner) {
        return acc + 6
    } else
        return acc
}, 0)


// x - lose
// y - draw
// z - win
const total2 = rounds.reduce((acc, round) => {
    const [choiceA, choiceB] = round.split(' ');
    // console.log('1: ', acc)
    switch (choiceB) {
        case 'X':
            return acc + shapeScore[wordsToLetters[getLooser(dictionary[choiceA])]]
        case 'Y':
            return acc + 3 + shapeScore[choiceA]
        case 'Z':
            return acc + 6 + shapeScore[wordsToLetters[getWinner(dictionary[choiceA])]]
    }


}, 0)
const table = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
}

const total3 = rounds.reduce((acc, round) => {
    // console.log('2: ', acc)
    return acc + table[round]


}, 0)

let total1 = 0, total22 = 0;
rounds.forEach(round => {

    const [choiceA, choiceB] = round.split(' ');

    if (choiceB === 'X')
        total1 += shapeScore[wordsToLetters[getLooser(dictionary[choiceA])]]
    if (choiceB === 'Y')
        total1 += 3 + shapeScore[choiceA]
    if (choiceB === 'Z')
        total1 += 6 + shapeScore[wordsToLetters[getWinner(dictionary[choiceA])]]

    // console.log(total1)

    total22+=table[round]

    if (total1 !== total22){
        console.log(total1, total22)
    }
})
console.log(total1, total22)
