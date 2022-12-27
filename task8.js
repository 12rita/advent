import {data8} from "./inputs/data8.js";


const treeMap = [];
const visibilityMap = [];
let visibilityCounter = 0;
const rows = data8.split('\n');
const rowLength = rows[0].length;
rows.forEach(row => {
    treeMap.push(row.split(''));
})


const checkVisibility = () => {

    for (let i = 0; i < treeMap.length; i++) {
        for (let j = 0; j < rowLength; j++) {
            const currentTree = treeMap[i][j];
            let visibleLeft = true;
            let visibleRight = true;
            let visibleTop = true;
            let visibleBottom = true;

            for (let t = 0; t < i; t++) {
                if (treeMap[t][j] >= currentTree) {
                    visibleTop = false;
                }
            }

            for (let b = i + 1; b < treeMap.length; b++) {
                if (treeMap[b][j] >= currentTree) {
                    visibleBottom = false;
                }
            }

            for (let l = 0; l < j; l++) {
                if (treeMap[i][l] >= currentTree) {
                    visibleLeft = false;
                }
            }

            for (let r = j + 1; r < rowLength; r++) {
                if (treeMap[i][r] >= currentTree) {
                    visibleRight = false;
                }
            }

            if (visibleLeft || visibleRight || visibleTop || visibleBottom) {
                visibilityCounter++;
            }

        }
    }

}


const countScenicScore = () => {
    for (let i = 1; i < treeMap.length - 1; i++) {
        for (let j = 1; j < rowLength - 1; j++) {
            // if (i === 1) console.log(treeMap[i][j]);
            const currentTree = treeMap[i][j];
            let visibleLeft = 0;
            let visibleRight = 0;
            let visibleTop = 0;
            let visibleBottom = 0;

            for (let t = i - 1; t > -1; t--) {
                if (treeMap[t][j] < currentTree) {
                    visibleTop++;
                } else {
                    visibleTop++;
                    break;
                }
            }

            for (let b = i + 1; b < treeMap.length; b++) {
                if (treeMap[b][j] < currentTree) {
                    visibleBottom++;
                } else {
                    visibleBottom++;
                    break;
                }
            }

            for (let l = j - 1; l > -1; l--) {
                if (treeMap[i][l] < currentTree) {
                    visibleLeft++;
                } else {
                    visibleLeft++;
                    break;
                }
            }

            for (let r = j + 1; r < rowLength; r++) {

                if (treeMap[i][r] < currentTree) {
                    visibleRight++;
                } else {
                    visibleRight++;
                    break;
                }
            }
            // if (i === 1) console.log({visibleLeft, visibleRight, visibleTop, visibleBottom, currentTree});
            const scenicScore = visibleLeft * visibleRight * visibleTop * visibleBottom;

            visibilityMap.push(scenicScore)

        }
    }

}
checkVisibility();
countScenicScore();
// console.log(treeMap);
console.log(Math.max(...visibilityMap));
// console.log(visibilityCounter)
