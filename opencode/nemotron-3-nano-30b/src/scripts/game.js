const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scoreElement = document.getElementById('score');
const overlay = document.getElementById('overlay');
const messageElement = document.getElementById('message');
const finalScoreElement = document.getElementById('finalScore');

// Grid settings
const GRID_SIZE = 20;
const CELL_SIZE = canvas.width / GRID_SIZE;

// Game state
let snake;
let tacoPosition;
let direction;
let nextDirection;
let score;
let gameRunning;

// Initialize game
function initGame() {
  snake = [{x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2)}];
  nextDirection = 'right';
  direction = 'right';
  tacoPosition = generateTacoPosition();
  score = 0;
  scoreElement.textContent = score;
  overlay.classList.add('hidden');
  gameRunning = true;
}

// Generate a random position for the taco that doesn't overlap with snake
function generateTacoPosition() {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  } while (snake.some(seg => seg.x === pos.x && seg.y === pos.y));
  return pos;
}

// Draw everything
function draw() {
  // Clear canvas
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  snake.forEach((seg, index) => {
    if (index === 0) {
      // Head - different color
      ctx.fillStyle = '#ff4d4d';
    } else {
      // Body segments
      ctx.fillStyle = '#4caf50';
    }
    ctx.fillRect(seg.x * CELL_SIZE, seg.y * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
  });

  // Draw taco
  ctx.fillStyle = '#ff9800';
  ctx.beginPath();
  ctx.moveTo(tacoPosition.x * CELL_SIZE + 5, tacoPosition.y * CELL_SIZE + 2);
  ctx.lineTo(tacoPosition.x * CELL_SIZE + CELL_SIZE - 7, tacoPosition.y * CELL_SIZE + 2);
  ctx.lineTo(tacoPosition.x * CELL_SIZE + CELL_SIZE - 10, tacoPosition.y * CELL_SIZE + 8);
  ctx.lineTo(tacoPosition.x * CELL_SIZE + CELL_SIZE - 7, tacoPosition.y * CELL_SIZE + CELL_SIZE - 2);
  ctx.lineTo(tacoPosition.x * CELL_SIZE + 5, tacoPosition.y * CELL_SIZE + CELL_SIZE - 2);
  ctx.lineTo(tacoPosition.x * CELL_SIZE + 10, tacoPosition.y * CELL_SIZE + CELL_SIZE - 7);
  ctx.lineTo(tacoPosition.x * CELL_SIZE + 7, tacoPosition.y * CELL_SIZE + CELL_SIZE - 7);
  ctx.lineTo(tacoPosition.x * CELL_SIZE + 2, tacoPosition.y * CELL_SIZE + CELL_SIZE - 10);
  ctx.closePath();
  ctx.fill();

  // Update score
  scoreElement.textContent = score;
}

// Game loop
function gameLoop() {
  if (!gameRunning) return;

  direction = nextDirection;

  // Move snake
  const head = {x: snake[0].x, y: snake[0].y};
  switch (direction) {
    case 'up': head.y--; break;
    case 'down': head.y++; break;
    case 'left': head.x--; break;
    case 'right': head.x++; break;
  }

  // Check wall collision
  if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
    gameOver();
    return;
  }

  // Check self collision
  if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
    gameOver();
    return;
  }

  snake.unshift(head);

  // Check taco collision
  if (head.x === tacoPosition.x && head.y === tacoPosition.y) {
    score += 10;
    scoreElement.textContent = score;

    // Grow snake by not removing tail
    tacoPosition = generateTacoPosition();
  } else {
    snake.pop(); // Remove tail for normal movement
  }

  draw();

  requestAnimationFrame(gameLoop);
}

// Handle input
document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      if (direction !== 'down') nextDirection = 'up';
      break;
    case 'ArrowDown':
    case 's':
      if (direction !== 'up') nextDirection = 'down';
      break;
    case 'ArrowLeft':
    case 'a':
      if (direction !== 'right') nextDirection = 'left';
      break;
    case 'ArrowRight':
    case 'd':
      if (direction !== 'left') nextDirection = 'right';
      break;
    case 'Enter':
      if (!gameRunning) initGame();
      break;
  }
});

// Game over handling
function gameOver() {
  gameRunning = false;
  overlay.classList.remove('hidden');
  messageElement.textContent = 'Game Over';
  finalScoreElement.textContent = score;
}

// Restart function for overlay button
function restart() {
  initGame();
  requestAnimationFrame(gameLoop);
}

// Start the loop and rendering
requestAnimationFrame(gameLoop);