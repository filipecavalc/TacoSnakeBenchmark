# Technology Stack Documentation for Taco Snake Game

## 1. Overview
This document outlines the chosen technologies, architecture, and folder organization for implementing the Taco Snake game as specified in `game_specification.md`. The stack is designed to meet all functional and non-functional requirements while remaining lightweight and easy to run locally.

## 2. Core Technologies
- **HTML5**: Structure of the game UI and canvas.
- **CSS3**: Styling for visual elements, including taco representation and background contrast.
- **JavaScript (ES6+)**: Primary logic for game mechanics, movement, collision detection, and scoring.
- **Canvas API** (or SVG fallback): Rendering of the snake and taco on a 2D grid.

## 3. Optional Enhancements (Non‑Required)
While not mandatory per specifications, these can be used to enrich development:
- **TypeScript**: For type safety in larger codebases.
- **ESLint + Prettier**: Code quality enforcement.
- **Vite** or **Parcel**: Simple bundler for development server and build process.

## 4. Architectural Approach
- **Single‑Page Application (SPA)**: All game components loaded into a single HTML file with dynamic DOM updates.
- **Component‑like Separation via Modules**:
  - `game.ts` – Core game loop, state management, and input handling.
  - `snake.ts` – Snake movement, growth, and self‑collision logic.
  - `taco.ts` – Taco spawning and collision detection with the snake.
  - `ui.ts` – Rendering of score, game over screen, and UI updates.
- **Event‑Driven Updates**: Game state changes trigger redraws of the canvas.

## 5. Folder Structure (Planned)
The following directory layout will be used once implementation begins:

```
opencode/
└─ nemotron-3-nano-30b/
   ├─ src/                # All source code
   │   ├─ index.html      # Entry point with <canvas> element
   │   ├─ style.css       # Styling for UI elements
   │   └─ scripts/        # JavaScript modules
   │       ├─ game.ts
   │       ├─ snake.ts
   │       ├─ taco.ts
   │       └─ ui.ts
   ├─ assets/             # Visual assets (taco images, icons)
   ├─ README.md           # Documentation on how to run the game
   └─ TECH_STACK.md       # This file
```

## 6. Dependencies & Libraries
- No external libraries are required for core functionality.
- Development tools may include:
  - **Node.js** with **npm** (for local server or bundler).
  - **Git** (version control).

## 7. Build & Run Requirements
- The game must be runnable via a simple static HTTP server (e.g., `npx serve .` or Python’s `http.server`), meeting the “no backend” requirement.
- All assets should load locally; no remote resources are needed.

## 8. Compliance with Specification
- The technology stack satisfies **all core gameplay features**, **visual requirements**, and **technical constraints** defined in `game_specification.md`.
- No unnecessary complexity is introduced, ensuring the implementation stays within the outlined success criteria.