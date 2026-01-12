# Evaluation Templates

This folder contains templates for evaluating and comparing benchmark results.

## Files

- `EVALUATION_TEMPLATE.md` - Template for evaluating each individual model/tool combination
- `BENCHMARK_COMPARISON_TEMPLATE.md` - Template for comparing all models after completing evaluations

## Workflow

### 1. After Completing Steps 1-3 for a Model

Copy and fill out `EVALUATION_TEMPLATE.md`:

```bash
# Example
cp templates/EVALUATION_TEMPLATE.md opencode/claude-sonnet-4.5/EVALUATION.md
```

Then fill in:
- Functional checklist (manually test each feature)
- Quantitative metrics (time, tokens, attempts)
- Code review scores (from CODE_REVIEW.md)
- Calculate final score using provided formula
- Add notes and observations

### 2. After Completing All Models

Copy and fill out `BENCHMARK_COMPARISON_TEMPLATE.md`:

```bash
cp templates/BENCHMARK_COMPARISON_TEMPLATE.md results/BENCHMARK_COMPARISON.md
```

Then fill in:
- Summary table with all models
- Rankings by different criteria
- Detailed breakdown for each model
- Feature comparison matrix
- Insights and conclusions

## Scoring System

### Score Calculation

The final score is a weighted average of four categories:

```
Final Score = (Functional × 40%) + (Visual × 20%) + (Technical × 20%) + (Quality × 20%)
```

Where:
- **Functional**: (Features Implemented / 15) × 100
- **Visual**: (Visual Requirements Met / 7) × 100
- **Technical**: (Technical Requirements Met / 6) × 100
- **Quality**: (Average Code Review Score / 10) × 100

### Pass/Fail Criteria

A model **PASSES** if:
- ✅ Functional Score ≥ 80%
- ✅ No critical bugs (game-breaking errors)
- ✅ Game is playable end-to-end

Otherwise, it **FAILS**.

## Tips for Evaluation

### Testing the Game
1. Open the game in browser
2. Test each feature systematically using the checklist
3. Look for edge cases (e.g., taco spawning on snake body)
4. Try to break the game intentionally

### Counting Attempts
An "attempt" counts when:
- You had to manually intervene
- You had to ask the model to fix something
- You had to restart the step

Does NOT count:
- Model running commands autonomously
- Model testing its own code

### Measuring Time and Tokens (Optional)
Time and tokens are recorded for personal reference but **should NOT be used for comparison**:

**Why?**
- Local models: Performance depends on hardware (CPU/GPU)
- Cloud models: Different API latencies and infrastructure
- Not indicative of code quality or capability

**If recording for reference:**
- **Time**: Start at first Step 2 message, end when game works
- **Tokens**: Use tool's counter (e.g., `/cost` in Claude Code), Step 2 only

**These metrics are excluded from benchmark rankings.**
