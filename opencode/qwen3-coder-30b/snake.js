// Snake class and movement logic
class Snake {
    constructor() {
        this.body = [
            {x: 10, y: 10},
            {x: 9, y: 10},
            {x: 8, y: 10}
        ];
        this.direction = 'right';
        this.nextDirection = 'right';
    }
    
    // Update snake direction
    updateDirection(newDirection) {
        // Prevent reverse direction
        if (
            (newDirection === 'up' && this.direction !== 'down') ||
            (newDirection === 'down' && this.direction !== 'up') ||
            (newDirection === 'left' && this.direction !== 'right') ||
            (newDirection === 'right' && this.direction !== 'left')
        ) {
            this.nextDirection = newDirection;
        }
    }
    
    // Move the snake
    move() {
        // Update direction
        this.direction = this.nextDirection;
        
        // Calculate new head position
        const head = {x: this.body[0].x, y: this.body[0].y};
        
        switch(this.direction) {
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
        
        // Add new head
        this.body.unshift(head);
    }
    
    // Check if snake eats taco
    checkTacoEaten(taco) {
        return this.body[0].x === taco.x && this.body[0].y === taco.y;
    }
    
    // Check collision with walls
    checkWallCollision(gridWidth, gridHeight) {
        const head = this.body[0];
        return head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight;
    }
    
    // Check collision with self
    checkSelfCollision() {
        const head = this.body[0];
        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
    
    // Reset snake to initial state
    reset() {
        this.body = [
            {x: 10, y: 10},
            {x: 9, y: 10},
            {x: 8, y: 10}
        ];
        this.direction = 'right';
        this.nextDirection = 'right';
    }
}