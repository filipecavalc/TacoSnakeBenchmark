# Notes

it do not work from upfront
![](./first%20run%20error.png)

- after sending him some errors it was able to fix,
- the space to restart was not working
- after prompting that the restart with space was not working, it was able to fix.

![](./Gravando%202026-01-12%20131448.gif)

# Taco Snake Game

A fully functional Snake game where the snake eats tacos instead of traditional food items. This implementation follows the complete specification and uses modern web technologies.

## How to Run

1. Save all the files in the same directory
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, or Edge)
3. The game will start automatically when you press SPACE

## How to Play

- Use **Arrow Keys** or **WASD** to control the snake's direction
- Eat tacos (orange circles) to grow and earn 10 points each
- Avoid hitting the walls or the snake's own body
- When game over, press SPACE to restart

## Game Features

- Classic Snake gameplay with taco food items
- Score tracking and display
- Game over screen with final score
- Restart functionality
- Visual distinction between snake head and body
- Responsive design

## Technical Implementation

- **Frontend**: HTML5 Canvas API, JavaScript (ES6+), CSS3
- **Architecture**: Model-View-Controller (MVC) pattern
- **Performance**: 60fps game loop using requestAnimationFrame
- **Controls**: Keyboard input handling for arrow keys and WASD
- **Collision Detection**: Accurate wall and self-collision detection
- **Visuals**: Canvas-drawn snake and tacos with clear visual distinction

## Files Structure

```
taco-snake/
├── index.html          # Main entry point
├── style.css          # Game styling and UI
├── game.js            # Main game logic and controller
├── snake.js           # Snake class and movement logic
├── taco.js            # Taco/food class and spawn logic
├── collision.js       # Collision detection algorithms
├── score.js           # Score tracking and display
└── README.md          # How to run the game
```

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs locally
- No external dependencies or frameworks

## Controls

- **Arrow Keys** (↑, ↓, ←, →) or **WASD** keys for movement
- **SPACE** to start or restart the game
