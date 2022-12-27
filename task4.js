import {data4} from "./data4.js";


const works = data4.split('\n');

const intersectionTotal = works.reduce((acc, work) => {
    const [firstRange, secondRange] = work.split(',');
    const [fLeftEnd, fRightEnd] = firstRange.split('-');
    const [sLeftEnd, sRightEnd] = secondRange.split('-');


    if (Number(fLeftEnd) >= Number(sLeftEnd) && Number(fRightEnd) <= Number(sRightEnd)) {
        return ++acc

    } else if (Number(sLeftEnd) >= Number(fLeftEnd) && Number(sRightEnd) <= Number(fRightEnd)) {
        return ++acc
    } else return acc
}, 0)

const overlapsTotal = works.reduce((acc, work) => {
    const [firstRange, secondRange] = work.split(',');
    const [fLeftEnd, fRightEnd] = firstRange.split('-');
    const [sLeftEnd, sRightEnd] = secondRange.split('-');

    if (Number(fLeftEnd) >= Number(sLeftEnd) && Number(fLeftEnd) <= Number(sRightEnd)) {
        return ++acc
    } else if (Number(fRightEnd) >= Number(sLeftEnd) && Number(fRightEnd) <= Number(sRightEnd)) {
        return ++acc

    } else if (Number(sLeftEnd) >= Number(fLeftEnd) && Number(sLeftEnd) <= Number(fRightEnd)) {
        return ++acc

    } else if (Number(sRightEnd) >= Number(fLeftEnd) && Number(sRightEnd) <= Number(fRightEnd)) {
        return ++acc

    } else return acc
}, 0)


console.log(overlapsTotal)
