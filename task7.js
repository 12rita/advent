import {data7} from "./data7.js";


const commands = data7.split('\n');

const fileSystem = {};
let currentDir;
let currentPath;

commands.forEach(command => {

    if (command[0] === '$') {

        const words = command.split(' ');
        const mainCommand = words[1];
        const additionalCommand = words[2];
        if (mainCommand === 'cd') {
            if (additionalCommand === '/') {
                currentPath = [];
                currentDir = fileSystem;
            } else if (additionalCommand === '..') {
                currentPath.pop();
                currentDir = fileSystem;
                currentPath.forEach(dirs => {
                    currentDir = currentDir[dirs];
                })

            } else {
                if (!currentDir[additionalCommand]) {
                    currentDir[additionalCommand] = {};
                }
                currentPath.push(additionalCommand);
                currentDir = currentDir[additionalCommand];

            }

        } else {

        }

    } else {
        const files = command.split(' ');
        if (files[0] === 'dir') {
            const dirName = files[1]
            currentDir[dirName] = {};

        } else {
            const fileSize = files[0];
            const fileName = files[1];
            currentDir[fileName] = fileSize;
        }
    }

})


const dirWeights = [];

const calculateSize = (directory) => {
    let size = 0;
    Object.keys(directory).forEach(file => {
        if (typeof directory[file] === 'string') {
            size += Number(directory[file]);
        } else {
            size += calculateSize(directory[file])
        }
    })
    dirWeights.push(size);
    return size;
}

calculateSize(fileSystem, 'global');

const totalWeight = dirWeights.reduce((acc, weight) => {
    if (weight <= 100000) {
        return acc + weight;
    } else
        return acc
}, 0)

dirWeights.sort((a,b)=>a-b);


const unusedSpace = 70000000 - dirWeights[dirWeights.length-1];
const spaceNeeded = 30000000 - unusedSpace;
console.log(totalWeight);
console.log(spaceNeeded)
const smallestDirWeight = dirWeights.find(weight=>{
    return  weight >=spaceNeeded;
})
console.log(smallestDirWeight);

