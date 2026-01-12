// Score tracking and display
class Score {
    constructor() {
        this.currentScore = 0;
    }
    
    // Update score
    addToScore(points) {
        this.currentScore += points;
    }
    
    // Get current score
    getScore() {
        return this.currentScore;
    }
    
    // Reset score
    reset() {
        this.currentScore = 0;
    }
}