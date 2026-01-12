// Taco/food class and spawn logic
class Taco {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    
    // Generate taco at random position
    generatePosition(snakeBody) {
        let newTaco;
        let onSnake;
        
        do {
            onSnake = false;
            newTaco = {
                x: Math.floor(Math.random() * gridWidth),
                y: Math.floor(Math.random() * gridHeight)
            };
            
            // Check if taco spawns on snake
            for (let segment of snakeBody) {
                if (segment.x === newTaco.x && segment.y === newTaco.y) {
                    onSnake = true;
                    break;
                }
            }
        } while (onSnake);
        
        this.x = newTaco.x;
        this.y = newTaco.y;
    }
    
    // Check if taco is at given position
    isAtPosition(x, y) {
        return this.x === x && this.y === y;
    }
}