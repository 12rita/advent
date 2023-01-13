import {data13} from "./inputs/data13.js";



const inputs = data13.split('\n').filter(item => item).map(item => JSON.parse(item));

const arrayComparsion = (array1, array2) => {
    // console.log({array1, array2})
    for (let i = 0; i < Math.max(array1.length, array2.length) + 1; i++) {

        const left = array1[i];
        const right = array2[i];
        // console.log({left, right})

        if (left === undefined && right !== undefined) {
            return true;
        }
        if (left !== undefined && right === undefined) {
            return false;
        }
        if (typeof left === 'number' && typeof right === 'number') {
            if (left < right) {
                return true;
            }

            if (left > right) {
                return false;
            }


        } else if (Array.isArray(left) && Array.isArray(right)) {
            const recursion = arrayComparsion(left, right);
            if (recursion !== undefined) {
                return recursion
            }
        } else {
            if (typeof left === 'number') {
                const recursion = arrayComparsion([left], right);
                if (recursion !== undefined) {
                    return recursion
                }
            }
            if (typeof right === 'number') {
                const recursion = arrayComparsion(left, [right])
                if (recursion !== undefined) {
                    return recursion
                }
            } else return undefined
        }


    }

}

const orderArray = [];

const checkOrder = () => {
    inputs.forEach(input => {
        const [_left, _right] = input.split('\n');
        const left = JSON.parse(_left);
        const right = JSON.parse(_right);


        const result = arrayComparsion(left, right)
        orderArray.push(result);

    })

    return orderArray.reduce((acc, item, currentIndex) => {
        if (item) {
            return acc + currentIndex + 1
        } else return acc
    }, 0)
}


const getRightOrder = () => {
    inputs.push([[2]], [[6]]);

    inputs.sort((a, b) => {
        const result = arrayComparsion(a, b)
        if (result) {
            return -1
        } else {
            return 1
        }

    });
    const firstDivider = inputs.findIndex((item) => JSON.stringify(item) === `[[2]]`) + 1;
    const secondDivider = inputs.findIndex((item) => JSON.stringify(item) === `[[6]]`) + 1;
    console.log(firstDivider * secondDivider)
}
getRightOrder();


