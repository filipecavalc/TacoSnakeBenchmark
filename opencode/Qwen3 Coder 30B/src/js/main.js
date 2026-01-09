/**
 * Snake Game with Taco Theme - Implementation using MVC pattern
 * @file Implements the classic Snake game with a taco theme using HTML5 Canvas
 * @author Snake Taco Developer
 */

// Game constants
const GRID_SIZE = 20;
const TILE_COUNT_X = 30;
const TILE_COUNT_Y = 20;
const GAME_SPEED = 150; // milliseconds

/**
 * Game state management
 * @typedef {Object} GameState
 * @property {number} score - Current game score
 * @property {number} highScore - High score record
 * @property {boolean} gameRunning - Whether game is running
 * @property {boolean} gamePaused - Whether game is paused
 * @property {Array} snake - Array of snake segments
 * @property {Object} food - Food position object
 * @property {string} direction - Current snake direction
 * @property {string} nextDirection - Next snake direction
 * @property {number} lastRenderTime - Timestamp of last render
 * @property {number} level - Current game level
 * @property {number} speed - Current game speed
 */

// Game state
/** @type {GameState} */
let gameState = {
    score: 0,
    highScore: 0,
    gameRunning: false,
    gamePaused: false,
    snake: [],
    food: {},
    direction: 'right',
    nextDirection: 'right',
    lastRenderTime: 0,
    level: 1,
    speed: GAME_SPEED
};

// Game elements
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const gameOverScreen = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');

/**
 * Initialize the game state
 * @function initGame
 * @returns {void}
 */
function initGame() {
    // Load high score from localStorage
    gameState.highScore = localStorage.getItem('snakeHighScore') || 0;
    highScoreElement.textContent = gameState.highScore;
    
    // Initialize snake
    gameState.snake = [
        {x: 5, y: 10},
        {x: 4, y: 10},
        {x: 3, y: 10}
    ];
    
    // Initialize game state
    gameState.score = 0;
    gameState.direction = 'right';
    gameState.nextDirection = 'right';
    gameState.gameRunning = false;
    gameState.gamePaused = false;
    gameState.level = 1;
    gameState.speed = GAME_SPEED;
    
    scoreElement.textContent = gameState.score;
    gameOverScreen.style.display = 'none';
    
    // Generate first food
    generateFood();
}

/**
 * Generate food at random position
 * @function generateFood
 * @returns {void}
 */
function generateFood() {
    // Create a new food position
    gameState.food = {
        x: Math.floor(Math.random() * TILE_COUNT_X),
        y: Math.floor(Math.random() * TILE_COUNT_Y)
    };
    
    // Make sure food doesn't appear on snake
    for (let segment of gameState.snake) {
        if (segment.x === gameState.food.x && segment.y === gameState.food.y) {
            generateFood();
            return;
        }
    }
}

/**
 * Move snake based on current direction
 * @function moveSnake
 * @returns {void}
 */
function moveSnake() {
    // Update direction
    gameState.direction = gameState.nextDirection;
    
    // Get head position
    const head = {x: gameState.snake[0].x, y: gameState.snake[0].y};
    
    // Move head based on direction
    switch (gameState.direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }
    
    // Check collision with walls
    if (head.x < 0 || head.x >= TILE_COUNT_X || head.y < 0 || head.y >= TILE_COUNT_Y) {
        gameOver();
        return;
    }
    
    // Check collision with self
    for (let i = 0; i < gameState.snake.length; i++) {
        if (gameState.snake[i].x === head.x && gameState.snake[i].y === head.y) {
            gameOver();
            return;
        }
    }
    
    // Add new head to snake
    gameState.snake.unshift(head);
    
    // Check if food is eaten
    if (head.x === gameState.food.x && head.y === gameState.food.y) {
        // Increase score
        gameState.score += 10;
        scoreElement.textContent = gameState.score;
        
        // Generate new food
        generateFood();
        
        // Level up every 50 points
        if (gameState.score % 50 === 0) {
            gameState.level++;
            gameState.speed = Math.max(50, GAME_SPEED - (gameState.level * 10));
        }
    } else {
        // Remove tail if no food eaten
        gameState.snake.pop();
    }
}

/**
 * Render game elements on canvas
 * @function render
 * @returns {void}
 */
function render() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background grid
    drawGrid();
    
    // Draw snake
    drawSnake();
    
    // Draw food (taco)
    drawFood();
}

/**
 * Draw background grid
 * @function drawGrid
 * @returns {void}
 */
function drawGrid() {
    ctx.fillStyle = '#16213e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid lines
    ctx.strokeStyle = '#0f3460';
    ctx.lineWidth = 0.5;
    
    for (let x = 0; x <= canvas.width; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    for (let y = 0; y <= canvas.height; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

/**
 * Draw snake on canvas
 * @function drawSnake
 * @returns {void}
 */
function drawSnake() {
    // Draw snake head
    const head = gameState.snake[0];
    ctx.fillStyle = '#4ecdc4';
    ctx.fillRect(head.x * GRID_SIZE, head.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    
    // Draw snake body
    for (let i = 1; i < gameState.snake.length; i++) {
        const segment = gameState.snake[i];
        ctx.fillStyle = '#1a936f';
        ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        
        // Add some detail to body segments
        ctx.fillStyle = '#166534';
        ctx.fillRect(segment.x * GRID_SIZE + 4, segment.y * GRID_SIZE + 4, GRID_SIZE - 8, GRID_SIZE - 8);
    }
    
    // Draw eyes on head
    ctx.fillStyle = '#000';
    const eyeSize = GRID_SIZE / 5;
    
    // Position eyes based on direction
    if (gameState.direction === 'right') {
        ctx.fillRect((head.x + 0.7) * GRID_SIZE, (head.y + 0.2) * GRID_SIZE, eyeSize, eyeSize);
        ctx.fillRect((head.x + 0.7) * GRID_SIZE, (head.y + 0.7) * GRID_SIZE, eyeSize, eyeSize);
    } else if (gameState.direction === 'left') {
        ctx.fillRect((head.x + 0.2) * GRID_SIZE, (head.y + 0.2) * GRID_SIZE, eyeSize, eyeSize);
        ctx.fillRect((head.x + 0.2) * GRID_SIZE, (head.y + 0.7) * GRID_SIZE, eyeSize, eyeSize);
    } else if (gameState.direction === 'up') {
        ctx.fillRect((head.x + 0.2) * GRID_SIZE, (head.y + 0.2) * GRID_SIZE, eyeSize, eyeSize);
        ctx.fillRect((head.x + 0.7) * GRID_SIZE, (head.y + 0.2) * GRID_SIZE, eyeSize, eyeSize);
    } else if (gameState.direction === 'down') {
        ctx.fillRect((head.x + 0.2) * GRID_SIZE, (head.y + 0.7) * GRID_SIZE, eyeSize, eyeSize);
        ctx.fillRect((head.x + 0.7) * GRID_SIZE, (head.y + 0.7) * GRID_SIZE, eyeSize, eyeSize);
    }
}

/**
 * Draw food (taco) on canvas
 * @function drawFood
 * @returns {void}
 */
function drawFood() {
    const food = gameState.food;
    
    // Draw taco shell
    ctx.fillStyle = '#ff9966';
    ctx.beginPath();
    ctx.ellipse(
        (food.x + 0.5) * GRID_SIZE,
        (food.y + 0.5) * GRID_SIZE,
        GRID_SIZE * 0.4,
        GRID_SIZE * 0.3,
        0,
        0,
        Math.PI * 2
    );
    ctx.fill();
    
    // Draw filling
    ctx.fillStyle = '#ff6600';
    ctx.beginPath();
    ctx.ellipse(
        (food.x + 0.5) * GRID_SIZE,
        (food.y + 0.3) * GRID_SIZE,
        GRID_SIZE * 0.3,
        GRID_SIZE * 0.2,
        0,
        0,
        Math.PI * 2
    );
    ctx.fill();
    
    // Draw texture (lettuce)
    ctx.fillStyle = '#4caf50';
    ctx.fillRect((food.x + 0.3) * GRID_SIZE, (food.y + 0.4) * GRID_SIZE, GRID_SIZE * 0.1, GRID_SIZE * 0.2);
    ctx.fillRect((food.x + 0.5) * GRID_SIZE, (food.y + 0.5) * GRID_SIZE, GRID_SIZE * 0.1, GRID_SIZE * 0.2);
    ctx.fillRect((food.x + 0.7) * GRID_SIZE, (food.y + 0.4) * GRID_SIZE, GRID_SIZE * 0.1, GRID_SIZE * 0.2);
}

/**
 * Main game loop using requestAnimationFrame
 * @function gameLoop
 * @param {number} timestamp - Current timestamp
 * @returns {void}
 */
function gameLoop(timestamp) {
    if (gameState.gameRunning && !gameState.gamePaused) {
        const secondsSinceLastRender = (timestamp - gameState.lastRenderTime) / 1000;
        
        if (secondsSinceLastRender > gameState.speed / 1000) {
            moveSnake();
            render();
            gameState.lastRenderTime = timestamp;
        }
    }
    
    requestAnimationFrame(gameLoop);
}

/**
 * Start game
 * @function startGame
 * @returns {void}
 */
function startGame() {
    if (!gameState.gameRunning) {
        gameState.gameRunning = true;
        gameState.gamePaused = false;
        startButton.textContent = "Restart Game";
    } else {
        // Reset game
        initGame();
        gameState.gameRunning = true;
        gameState.gamePaused = false;
    }
    
    // Hide game over screen
    gameOverScreen.style.display = 'none';
}

/**
 * Pause or resume game
 * @function pauseGame
 * @returns {void}
 */
function pauseGame() {
    if (!gameState.gameRunning) return;
    
    gameState.gamePaused = !gameState.gamePaused;
    pauseButton.textContent = gameState.gamePaused ? "Resume" : "Pause";
}

/**
 * Handle game over
 * @function gameOver
 * @returns {void}
 */
function gameOver() {
    // Save high score if needed
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('snakeHighScore', gameState.highScore);
        highScoreElement.textContent = gameState.highScore;
    }
    
    // Show game over screen
    finalScoreElement.textContent = gameState.score;
    gameOverScreen.style.display = 'block';
    
    // Stop game
    gameState.gameRunning = false;
    gameState.gamePaused = false;
}

/**
 * Handle keyboard input
 * @function handleKeyDown
 * @param {Event} e - Keyboard event
 * @returns {void}
 */
function handleKeyDown(e) {
    // Prevent arrow keys from scrolling page
    if ([37, 38, 39, 40, 65, 87, 68, 83].includes(e.keyCode)) {
        e.preventDefault();
    }
    
    // Handle direction change
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (gameState.direction !== 'down') gameState.nextDirection = 'up';
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            if (gameState.direction !== 'up') gameState.nextDirection = 'down';
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            if (gameState.direction !== 'right') gameState.nextDirection = 'left';
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            if (gameState.direction !== 'left') gameState.nextDirection = 'right';
            break;
        case ' ':
            if (gameState.gameRunning) {
                pauseGame();
            } else {
                startGame();
            }
            break;
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    
    // Set up event listeners
    startButton.addEventListener('click', startGame);
    pauseButton.addEventListener('click', pauseGame);
    document.addEventListener('keydown', handleKeyDown);
    
    // Start game loop
    requestAnimationFrame(gameLoop);
});