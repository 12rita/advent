import {example13} from "./inputs/data13.js";


const inputs = example13.split('\n').filter(item => item).map(item => JSON.parse(item));

const arrayComparsion = (array1, array2) => {
    // console.log(array1, array2)
    for (let i = 0; i < Math.max(array1.length, array2.length) + 1; i++) {

        const left = array1[i];
        const right = array2[i];

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
                return arrayComparsion([left], right)
            }
            if (typeof right === 'number') {
                return arrayComparsion(left, [right])
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
    console.log({inputs, order:'first'})
    inputs.sort((a,b)=>{
        const result = arrayComparsion(a,b)
        console.log({a, b, result});
        return result
    });
    const firstDivider = inputs.findIndex((item) => JSON.stringify(item) === `[[2]]`);
    const secondDivider = inputs.findIndex((item) => JSON.stringify(item) === `[[6]]`);
    // console.log({inputs, order:'second'})
}
// getRightOrder();

arrayComparsion([ [ 1 ], [ 2, 3, 4 ] ], [ 1, 1, 5, 1, 1 ]);

