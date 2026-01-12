const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const overlay = document.getElementById("overlay");
const msgElement = document.getElementById("message");
const finalScoreElem = document.getElementById("finalScore");
const GRID_SIZE = 20;
const CELL_SIZE = canvas.width / GRID_SIZE;
let snake,
  tacoPosition,
  direction = "right",
  nextDirection = "right";
let score = 0,
  gameRunning = true;
const MOVE_DELAY = 150; // ms between moves – increase to slow down
let lastTick = 0;
initGame();
requestAnimationFrame(gameLoop);
function initGame() {
  snake = [{ x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2) }];
  nextDirection = "right";
  direction = "right";
  tacoPosition = generateTacoPosition();
  score = 0;
  scoreElement.textContent = score;
  overlay.classList.add("hidden");
  gameRunning = true;
}
function generateTacoPosition() {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === pos.x && s.y === pos.y));
  return pos;
}
function draw() {
  // Clear the canvas
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Draw snake – red head / green body
  snake.forEach((seg, i) => {
    ctx.fillStyle = i === 0 ? "#ff4d4d" : "#4caf50";
    ctx.fillRect(
      seg.x * CELL_SIZE,
      seg.y * CELL_SIZE,
      CELL_SIZE - 1,
      CELL_SIZE - 1
    );
  });
  // Draw taco (simple orange square)
  ctx.fillStyle = "#ff9800";
  ctx.fillRect(
    tacoPosition.x * CELL_SIZE + 2,
    tacoPosition.y * CELL_SIZE + 2,
    CELL_SIZE - 4,
    CELL_SIZE - 4
  );
  scoreElement.textContent = score;
}
// ---------------------------------------------------------------
// Game loop – throttled so the snake only moves every MOVE_DELAY ms
function gameLoop(timestamp) {
  if (!gameRunning) return;
  const now = timestamp || Date.now();
  // Move only after the delay has elapsed
  if (now - lastTick >= MOVE_DELAY) {
    lastTick = now;
    direction = nextDirection; // apply pending direction
    // ----- movement -----
    const head = { ...snake[0] }; // clone current head segment
    switch (direction) {
      case "up":
        head.y--;
        break;
      case "down":
        head.y++;
        break;
      case "left":
        head.x--;
        break;
      case "right":
        head.x++;
        break;
    }
    // ----- collision checks -----
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      gameOver();
      return;
    }
    if (snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
      gameOver();
      return;
    }
    // ----- grow / shrink -----
    snake.unshift(head);
    if (head.x === tacoPosition.x && head.y === tacoPosition.y) {
      score += 10; // eat taco
      scoreElement.textContent = score;
      tacoPosition = generateTacoPosition(); // new taco
    } else {
      snake.pop(); // normal move – discard tail
    }
    draw(); // render the frame
    requestAnimationFrame(gameLoop); // schedule next tick
  } else {
    // Not time to move yet – keep the animation loop alive
    requestAnimationFrame(gameLoop);
  }
}
// ---------------------------------------------------------------
// Keyboard controls (arrow keys + Enter)
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (direction !== "down") nextDirection = "up";
      break;
    case "ArrowDown":
      if (direction !== "up") nextDirection = "down";
      break;
    case "ArrowLeft":
      if (direction !== "right") nextDirection = "left";
      break;
    case "ArrowRight":
      if (direction !== "left") nextDirection = "right";
      break;
    case "Enter":
      if (!gameRunning) initGame();
      break;
  }
});
// ---------------------------------------------------------------
// Game‑over handling
function gameOver() {
  gameRunning = false;
  overlay.classList.remove("hidden");
  finalScoreElem.textContent = score;
}
// Restart button handler (called from HTML overlay)
function restart() {
  initGame();
  requestAnimationFrame(gameLoop);
}

// Start the loop and rendering
initGame();
console.log("Starting game loop");
requestAnimationFrame(gameLoop);
