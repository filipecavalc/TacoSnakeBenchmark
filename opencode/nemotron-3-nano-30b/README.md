# Taco Snake Game

A simple browser-based Snake game where you control a snake that eats tacos instead of traditional food items. The goal is to grow as long as possible while avoiding collisions with walls or yourself.

## Overview
- Classic Snake gameplay with a taco-themed twist
- Eat tacos to grow and increase your score
- Use arrow keys or WASD to control the snake's direction
- Game ends when you hit a wall or yourself

## Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - can be run locally via file:// protocol or simple static server

## Setup + Installation
1. Ensure the project structure is in place:
   ```
   opencode/
   └─ nemotron-3-nano-30b/
      ├─ src/
      │  ├─ index.html
      │  ├─ style.css
      │  └─ scripts/
      │     └─ game.js
      ├─ README.md
      └─ TECH_STACK.md
   ```
2. Navigate to the project folder in your file explorer.

## How to Run
### Option A: Open with Browser (no server)
- Double-click `index.html` or drag it into a browser window.
- The game should load automatically.

### Option B: Using a Simple Static Server
```bash
# From the project root directory:
npx serve .
```
Then open http://localhost:3000 in your browser.

## How to Play
- Use **Arrow Keys** or **WASD** keys to change the snake's direction.
- The snake moves continuously; you cannot reverse directly (e.g., going up then immediately down).
- Each taco eaten adds 10 points to your score, displayed at the top.
- Avoid hitting the walls or any part of the snake's own body - that ends the game.
- When the game ends, a "Game Over" screen appears with your final score and a **Restart** button.

## Technologies Used
- **HTML5**: Structure and semantic elements.
- **CSS3**: Styling for layout, canvas borders, UI elements, and visual contrast.
- **JavaScript (ES6+)**: Core game logic including movement, collision detection, scoring, and rendering.
- **Canvas API**: Rendering of the snake, taco, and score updates.

## Additional Notes
- All assets are rendered using CSS shapes and Canvas; no external asset files required.
- The implementation follows the architecture outlined in `TECH_STACK.md`: single-page application with modular game components.
- This game meets all requirements defined in `game_specification.md` for core gameplay, visual appearance, and technical constraints.

Enjoy playing!