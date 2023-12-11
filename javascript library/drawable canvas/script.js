const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth / 1.5);
const height = (canvas.height = (window.innerHeight - 85) / 1.5);
const ctx = canvas.getContext("2d");
const canvasBg = document.querySelector("#background");

let backgroundColor = "rgb(0, 0, 0)";

ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector("input[type='color']");
const sizePicker = document.querySelector("input[type='range']");
const output = document.querySelector(".output");
const clearBtn = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");

function degToRad(degrees){
    return degrees * Math.PI / 180;
};

sizePicker.addEventListener("input", () => output.textContent = sizePicker.value);

let curX;
let curY;
let pressed = false;
let eraserPressed = false;

eraser.addEventListener("click", () => {
    if(eraserPressed === false){
        eraserPressed = true;
        eraser.style.color = "wheat";
    }  
    else {
        eraserPressed = false;
        eraser.style.color = "";
    }
});

document.addEventListener("mousemove", (e) => {
  curX = e.pageX;
  curY = e.pageY;
});

canvas.addEventListener("mousedown", () => (pressed = true));

canvas.addEventListener("mouseup", () => (pressed = false));

clearBtn.addEventListener("click", () => {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
});

function draw(){
    if(pressed){
        if(eraserPressed === true){
            ctx.fillStyle = backgroundColor;
        } else {
            ctx.fillStyle = colorPicker.value;
        }
        ctx.beginPath();
        ctx.arc(curX-160, curY-125, sizePicker.value, degToRad(0), degToRad(360), false);
        ctx.fill();
    }

    requestAnimationFrame(draw);
}

draw();