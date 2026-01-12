# Taco Snake Game - Specification

This document defines the complete specification for the Taco Snake game used in the benchmark.

## Game Concept
A Snake game where the snake eats tacos instead of traditional food items.

## Core Gameplay Features

### 1. Snake Movement
- Snake moves continuously in one direction
- Player controls direction using:
  - Arrow keys (↑ ↓ ← →) OR
  - WASD keys
- Snake can move in 4 directions: up, down, left, right
- Snake cannot reverse direction (cannot go directly backwards)

### 2. Snake Growth
- Snake starts with 3 segments
- Snake grows by 1 segment each time it eats a taco
- Growth should be visible and immediate

### 3. Taco (Food) System
- One taco appears on screen at a time
- Taco spawns at random position on the grid
- Taco should NOT spawn on the snake's body
- When snake eats taco, new taco spawns immediately

### 4. Score System
- Player starts with 0 points
- Each taco eaten = 10 points
- Score must be displayed on screen at all times
- Score updates immediately when taco is eaten

### 5. Collision Detection
- **Wall collision**: Snake hits any wall → Game Over
- **Self collision**: Snake hits its own body → Game Over
- Collisions must be detected accurately

### 6. Game Over
- Game displays clear "Game Over" message
- Final score is shown
- Player can restart the game
- Restart returns game to initial state (score 0, snake size 3)

## Visual Requirements

### Taco Appearance
- **MUST be visually recognizable as a taco**
- Acceptable representations:
  - Taco emoji (🌮)
  - Taco sprite/image
  - CSS-drawn taco shape
  - Any clear graphical representation
- Should contrast with background

### Snake Appearance
- Snake must be clearly visible
- Body must be visually segmented (individual segments distinguishable)
- Snake should contrast with background
- Optional: Head visually different from body segments

### Game Area
- Canvas/grid with visible boundaries
- Recommended size: 400x400 pixels or 20x20 grid cells
- Background color should contrast with snake and taco
- Grid lines are optional

### UI Elements
- **Score display**: Clear, always visible, updates in real-time
- **Game Over screen**: Clear message with final score
- **Restart instruction**: Clear indication of how to restart
- **Controls info**: Optional but recommended (show which keys to use)

## Technical Requirements

### Platform
- Must run in modern web browsers (Chrome, Firefox, Safari, Edge)
- Must be testable locally (no server required, or simple local server)
- No backend or database required
- Single-player only

### Performance
- Game should run smoothly
- Recommended snake speed: ~100-150ms per move (adjustable)
- No lag or stuttering during gameplay

### Code Quality
- Follow best practices for chosen technology
- Clear code organization
- Appropriate separation of concerns
- Readable variable and function names

## What is NOT Required

- ❌ Multiple difficulty levels
- ❌ High score persistence (no need to save between sessions)
- ❌ Sound effects or music
- ❌ Animations (beyond basic movement)
- ❌ Mobile touch controls
- ❌ Multiplayer
- ❌ Power-ups or special items
- ❌ Multiple levels or stages
- ❌ Obstacles beyond walls

## Success Definition

A successful implementation:
- ✅ Implements ALL core gameplay features
- ✅ Has NO game-breaking bugs
- ✅ Is playable and enjoyable
- ✅ Meets all visual requirements
- ✅ Runs without errors in browser
- ✅ Includes clear documentation on how to run
