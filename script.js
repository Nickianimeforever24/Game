const canvas = document.querySelector("canvas");

canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext("2d");

let playerX = 20;
let playerY = 20;

let baseX = Math.floor(Math.random() * 250);
let baseY = Math.floor(Math.random() * 250);

function step() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillStyle = "red";
  ctx.fillRect(playerX, playerY, 10, 10);
  ctx.strokeRect(baseX, baseY, 50, 50);
  requestAnimationFrame(step);

  if (
    playerX >= baseX - 10 &&
    playerY >= baseY - 10 &&
    playerX < baseX + 10 &&
    playerY < baseY + 10
  ) {
    baseX = Math.floor(Math.random() * 250);
    baseY = Math.floor(Math.random() * 250);
  }
}

requestAnimationFrame(step);

function handleInput(event) {
  const key = event.key;

  if (key === "w") {
    playerY -= 5;
  } else if (key === "a") {
    playerX -= 5;
  } else if (key === "s") {
    playerY += 5;
  } else if (key === "d") {
    playerX += 5;
  }
}

document.addEventListener("keypress", handleInput);
