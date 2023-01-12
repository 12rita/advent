import {example14} from "./inputs/data14.js";


const lines = example14.split('\n');

// const rocksCanvas = document.getElementById('rocksCanvas');


const canvas = document.getElementById("rocksCanvas");
const ctx = canvas.getContext("2d");
// ctx.scale(5,5)



// ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);


canvas.addEventListener("mousemove", function(e) {
    const cRect = canvas.getBoundingClientRect();
    const canvasX = Math.round(e.clientX - cRect.left);
    const canvasY = Math.round(e.clientY - cRect.top);
    console.log("X: "+canvasX+", Y: "+canvasY)

});

const normilizeCoords = (x, y) => {
    return {x: x * 10 - 4500, y: y * 10}
}

const sandPoint = normilizeCoords(500, 0);
lines.forEach(line => {
    const coordsArr = line.split(' -> ');
    ctx.beginPath();
    ctx.lineWidth = 10;
    const startPoint = coordsArr.shift();
    const [_x, _y] = startPoint.split(',');
    const {x, y} = normilizeCoords(_x, _y)
    ctx.moveTo(Number(x), Number(y));

    coordsArr.forEach(coords => {
        const [_x, _y] = coords.split(',');
        const {x, y} = normilizeCoords(_x, _y);
        // const rock = document.createElement('div');
        // console.log(x, y)

        ctx.lineTo(Number(x), Number(y));

        // ctx.fillRect(Number(x)-300, Number(y), 5, 5)
        // rock.innerText='#';
        // rock.style.position = 'absolute';
        // rock.style.left = x +'px';
        // rock.style.top = y + 'px';
        // console.log(rock.style)
        // rocksCanvas.append(rock)
    })
    ctx.stroke();
    // ctx.closePath();

})



const checkIfFree = (x, y) => {
    const buffer = new Uint32Array(ctx.getImageData(x, y, 10, 10).data.buffer)
    return !buffer.some(color => color)
}

const sandFall = () => {

    // ctx.beginPath();
    let {x, y} = sandPoint;
    // ctx.beginPath();
    // ctx.arc(x+5,y+5, 5, 0, 2*Math.PI);
    // ctx.stroke();

    let isRest = false;
    while (!isRest){

       if (checkIfFree(x, y+10)){

           y=y+10;
           console.log(x,y)
           ctx.beginPath();
           // ctx.moveTo(x+5,y+5);
           ctx.arc(x+5,y+5, 5, 0, 2*Math.PI);
           ctx.stroke();
       }
       else if (checkIfFree(x-10, y+10)){
           x=x-10;
           y=y+10;
           ctx.beginPath();
           // ctx.moveTo(x+5,y+5);
           ctx.arc(x+5,y+5, 5, 0, 2*Math.PI);
           ctx.stroke();
       }
       else if (checkIfFree(x+10, y+10)){
           x=x+10;
           y=y+10;
           ctx.beginPath();
           // ctx.moveTo(x+5,y+5);
           ctx.arc(x+5,y+5, 5, 0, 2*Math.PI);
           ctx.stroke();
       }
       else isRest = true;
    }

}

sandFall();