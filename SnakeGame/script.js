// const cvs = document.getElementById("snake");
// const ctx = cvs.getContext("2d");

// const box = 32;

// const ground = new Image();
// ground.src = "https://raw.githubusercontent.com/CodeExplainedRepo/Snake-JavaScript/master/img/ground.png";

// const foodImg = new Image();
// foodImg.src = "https://raw.githubusercontent.com/CodeExplainedRepo/Snake-JavaScript/master/img/food.png";


// let snake = [];
// snake[0] = {
//     x: 9 * box,
//     y : 5 * box
// }

// let food = {
//     x: Math.floor(Math.random()*17+1) * box,
//     y: Math.floor(Math.random()*15+3) * box
// }

// let score = 0;

// let d;
// document.addEventListener('keydown', direction);

// function direction(e) {
//     if(e.keyCode == 37 && d !="RIGHT") {
//         d = "LEFT";
//     } else if (e.keyCode == 38 && d !="DOWN"){
//         d = "UP";

//     } else if (e.keyCode == 39 && d !="LEFT"){
//         d = "RIGHT";

//     } else if (e.keyCode == 40 && d !="UP"){
//         d = "DOWN";

//     }
// }

// function draw() {
//     ctx.drawImage(ground, 0,0);

//     for(let i = 0; i < snake.length; i++) {
//         ctx.fillStyle = (i == 0)? "green" : "white";
//         ctx.fillRect(snake[i].x, snake[i].y, box, box);

//         ctx.strokeStyle = "red";
//         ctx.strokeRect(snake[i].x, snake[i].y, box, box);
//     }

//     ctx.drawImage(foodImg, food.x, food.y);

//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;

//     if (snakeX == food.x && snakeY == food.y) {
//         score++;
//         food =  {
//             x: Math.floor(Math.random()*17+1) * box,
//             y: Math.floor(Math.random()*15+3) * box
//         }
//     } else {
//         snake.pop();
//     }

//     if (snakeX < box || snakeX > 17 * box || snakeY < 3 *box || snakeY > 17 * box) {
//         clearInterval(game);
//     }
    
   

//     if (d == "LEFT") snakeX -=box;
//     if (d == "UP") snakeY -=box;
//     if (d == "RIGHT") snakeX +=box;
//     if (d == "DOWN") snakeY +=box;

//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }

//     snake.unshift(newHead);

//     ctx.fillStyle = "white";
//     ctx.font = "45px";
//     ctx.fillText(score, 2*box, 1.6*box);
// }

// let game = setInterval(draw, 100);


// for (let key in [3,{63:22},23]) {
//     alert(key);
// }

// let arr = ['el1', 'el2', 'el3'];

// arr.addedProp = 'arrProp';

// // elKey are the property keys
// for (let elKey in arr) {
//   console.log(elKey);
// }

// // elValue are the property values
// for (let elValue of arr) {
//   console.log(elValue)
// }

// console.log(arr)

const wu = [
    {hello : 36},
    {jlni: 89} 
]
for (let key in wu ) {
    console.log(wu[key].hello);
}

// console.log(wu[0].jlni);