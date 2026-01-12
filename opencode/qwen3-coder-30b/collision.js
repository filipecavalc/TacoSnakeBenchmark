// Collision detection algorithms
class CollisionDetector {
    // Check wall collision
    static checkWallCollision(snake, gridWidth, gridHeight) {
        const head = snake.body[0];
        return head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight;
    }
    
    // Check self collision
    static checkSelfCollision(snake) {
        const head = snake.body[0];
        for (let i = 1; i < snake.body.length; i++) {
            if (head.x === snake.body[i].x && head.y === snake.body[i].y) {
                return true;
            }
        }
        return false;
    }
    
    // Check taco collision
    static checkTacoCollision(snake, taco) {
        const head = snake.body[0];
        return head.x === taco.x && head.y === taco.y;
    }
}