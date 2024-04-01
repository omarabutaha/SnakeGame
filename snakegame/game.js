import { SNAKE_SPEED,update as updateSnake,draw as drawSnake, snakeIntersection,getSnakeHead } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0; 
let gameOver = false ;
const gameBoard = document.getElementById("game-board");

function main(currentTime){
        if(gameOver){
            if (confirm("You Lost. Press Ok to restart")) {
                window.location = "/";    
            }
            return;
        }
    window.requestAnimationFrame(main);
    const secondsinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsinceLastRender < 1 / SNAKE_SPEED) return;
    console.log(secondsinceLastRender);
    lastRenderTime = currentTime;

    update();
    draw();

}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) ||  snakeIntersection();
}