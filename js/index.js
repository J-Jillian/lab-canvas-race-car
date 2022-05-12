
let startScreen = document.querySelector(".game-intro");
let playScreen = document.querySelector(".play-board");
let canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");

let carLeft = false;
let carRight = false;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
    
  };

  function startGame() {
    startScreen.style.display = "none";
    setupCanvas()
    

  }

};

function setupCanvas(){
  
    let car = new Image();
    car.src = "images/car.png";
    car.onload = function (){
    ctx.drawImage(car, 250, 600, 40, 80)
    }

    let road = new Image ();
    road.src = "images/road.png";
    road.onload = function(){
      ctx.drawImage(road, 0,0, 500, 700)
    }

    if (carLeft) {
      if (paddleX > 0) {
        paddleX -= paddleSpeedValue;
      }
    } else if (carRight) {
      if (paddleX < canvas.width - paddleWidth) {
        paddleX += paddleSpeedValue;
      }
    }

  
}




// window.addEventListener("load", () => {
//   canvas.style.display = "none";
//   restartBtn.style.display = "none";

//   start();
//   startBtn.addEventListener("click", () => {
//     start();
//   });

//   restartBtn.addEventListener("click", () => {
//     restart();
//   });

//   document.addEventListener("keydown", event => {
//     if (event.code === "ArrowLeft") {
//       isPaddleGoingLeft = true;
//     }
//     if (event.code === "ArrowRight") {
//       isPaddleGoingRight = true;
//     }
//   });

//   document.addEventListener("keyup", event => {
//     isPaddleGoingLeft = false;
//     isPaddleGoingRight = false;
//   });
// });