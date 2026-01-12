// Game variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('finalScore');
const gameOverScreen = document.getElementById('gameOverScreen');
const startScreen = document.getElementById('startScreen');
const gameOverlay = document.getElementById('gameOverlay');

// Game state
let gameRunning = false;
let gameLoop;
let score = 0;

// Game constants
const gridSize = 20;
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;
const snakeSpeed = 100; // milliseconds per move

// Game objects
let snake;
let taco;
let scoreManager;

// Initialize the game
function init() {
    resetGame();
    draw();
    
    // Event listeners
    document.addEventListener('keydown', handleKeyPress);
    canvas.addEventListener('click', startGame);
    gameOverlay.addEventListener('click', startGame);
}

// Reset game state
function resetGame() {
    // Create new game objects
    snake = new Snake();
    taco = new Taco();
    scoreManager = new Score();
    
    // Generate first taco
    taco.generatePosition(snake.body);
    
    // Reset score
    score = 0;
    scoreElement.textContent = score;
    gameOverScreen.style.display = 'none';
    startScreen.style.display = 'block';
    gameRunning = false;
    if (gameLoop) {
        clearTimeout(gameLoop);
        gameLoop = null;
    }
}

// Start the game
function startGame() {
    if (!gameRunning) {
        startScreen.style.display = 'none';
        gameRunning = true;
        update();
    }
}

// Handle keyboard input
function handleKeyPress(e) {
    if (e.code === 'Space') {
        // When game is over, SPACE restarts the game
        if (gameOverScreen.style.display === 'block') {
            resetGame();
            startGame();
        } 
        // When game is not running, SPACE starts the game
        else if (!gameRunning) {
            startScreen.style.display = 'none';
            gameRunning = true;
            update();
        }
    }
    
    if (!gameRunning) return;
    
    switch(e.code) {
        case 'ArrowUp':
        case 'KeyW':
            snake.updateDirection('up');
            break;
        case 'ArrowDown':
        case 'KeyS':
            snake.updateDirection('down');
            break;
        case 'ArrowLeft':
        case 'KeyA':
            snake.updateDirection('left');
            break;
        case 'ArrowRight':
        case 'KeyD':
            snake.updateDirection('right');
            break;
    }
}

// Update game state
function update() {
    if (!gameRunning) return;
    
    // Move snake
    snake.move();
    
    // Check if taco is eaten
    if (snake.checkTacoEaten(taco)) {
        // Increase score
        scoreManager.addToScore(10);
        scoreElement.textContent = scoreManager.getScore();
        
        // Generate new taco
        taco.generatePosition(snake.body);
    } else {
        // Remove tail if no taco eaten (snake moves)
        snake.body.pop();
    }
    
    // Check collision with walls
    if (snake.checkWallCollision(gridWidth, gridHeight)) {
        gameOver();
        return;
    }
    
    // Check collision with self
    if (snake.checkSelfCollision()) {
        gameOver();
        return;
    }
    
    // Draw everything
    draw();
    
    // Continue game loop
    gameLoop = setTimeout(update, snakeSpeed);
}

// Draw game elements
function draw() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid lines (optional)
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    // Draw snake
    snake.body.forEach((segment, index) => {
        if (index === 0) {
            // Draw head with different color
            ctx.fillStyle = '#4CAF50';
        } else {
            // Draw body
            ctx.fillStyle = '#8BC34A';
        }
        
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        
        // Add border to segments
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
    
    // Draw taco
    ctx.fillStyle = '#FF9800';
    ctx.beginPath();
    ctx.arc(
        taco.x * gridSize + gridSize/2, 
        taco.y * gridSize + gridSize/2, 
        gridSize/2, 
        0, 
        Math.PI * 2
    );
    ctx.fill();
    
    // Add taco details (taco shell)
    ctx.fillStyle = '#FF5722';
    ctx.beginPath();
    ctx.arc(
        taco.x * gridSize + gridSize/2, 
        taco.y * gridSize + gridSize/2, 
        gridSize/3, 
        0, 
        Math.PI * 2
    );
    ctx.fill();
}

// Game over function
function gameOver() {
    gameRunning = false;
    clearTimeout(gameLoop);
    
    finalScoreElement.textContent = scoreManager.getScore();
    gameOverScreen.style.display = 'block';
}

// Initialize the game when page loads
window.onload = init;