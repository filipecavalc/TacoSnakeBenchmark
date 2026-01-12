# Evaluation: [MODEL_NAME] - [TOOL_NAME]

**Date**: [YYYY-MM-DD]
**Evaluator**: [Your Name]
**Model**: [e.g., Claude Sonnet 4.5, Qwen3 Coder 30B]
**Tool**: [e.g., Claude Code, Opencode]
**Folder**: [e.g., ./opencode/claude-sonnet-4.5]

---

## ✅ Functional Checklist

Based on `game_specification.md`, verify each feature:

### Core Gameplay
- [ ] Snake moves in 4 directions (arrow keys or WASD)
- [ ] Snake cannot reverse direction
- [ ] Snake starts with 3 segments
- [ ] Snake grows by 1 segment when eating taco
- [ ] One taco on screen at a time
- [ ] Taco spawns randomly (not on snake body)
- [ ] Score starts at 0
- [ ] Each taco = 10 points
- [ ] Score displayed and updates in real-time
- [ ] Wall collision causes Game Over
- [ ] Self collision causes Game Over
- [ ] Game Over message displayed
- [ ] Final score shown on Game Over
- [ ] Restart functionality works
- [ ] Restart resets to initial state

**Features Implemented**: ___/15

### Visual Requirements
- [ ] Taco is visually recognizable as a taco
- [ ] Snake is clearly visible
- [ ] Snake body is segmented
- [ ] Canvas/grid has visible boundaries
- [ ] Score display is clear and visible
- [ ] Game Over screen is clear
- [ ] Restart instructions are clear

**Visual Requirements Met**: ___/7

### Technical Requirements
- [ ] Runs in modern browser without errors
- [ ] Can be tested locally
- [ ] No backend/database required
- [ ] README with setup instructions exists
- [ ] README with run instructions exists
- [ ] README with controls/how-to-play exists

**Technical Requirements Met**: ___/6

---

## 📊 Quantitative Metrics

### Development Performance
- **Total time**: ___ minutes (from first message to delivery)
- **Tokens used** (Step 2 only): ___ tokens
- **Number of attempts**: ___ (how many times you had to intervene/retry)
- **Files created**: ___ files
- **Console errors**: ___ errors found when running

> **Note**: Time and tokens are for reference only and should NOT be used for cross-model comparison due to:
> - Local models run on different hardware (performance varies)
> - Cloud models have different API latencies
> - These metrics don't reflect code quality or capability

### Code Review Scores (from Step 3 - CODE_REVIEW.md)
- **Functionality**: ___/10
- **Visual Requirements**: ___/10
- **Code Quality**: ___/10
- **Architecture**: ___/10
- **Documentation**: ___/10
- **Testing**: ___/10

**Average Code Review Score**: ___/10

---

## 🎯 Final Assessment

### Overall Score Calculation

**Functional Score**: (Features Implemented / 15) × 100 = ___%
**Visual Score**: (Visual Requirements Met / 7) × 100 = ___%
**Technical Score**: (Technical Requirements Met / 6) × 100 = ___%
**Quality Score**: (Average Code Review Score / 10) × 100 = ___%

**Final Score**: (Functional × 0.4 + Visual × 0.2 + Technical × 0.2 + Quality × 0.2) = ___%

### Pass/Fail Criteria

**Status**: ✅ PASS / ❌ FAIL

*Pass criteria:*
- Functional Score ≥ 80%
- No critical bugs (game-breaking errors)
- Game is playable end-to-end

---

## 📝 Notes and Observations

### Strengths
-

### Weaknesses
-

### Bugs Found
-

### Surprises (positive or negative)
-

### Additional Comments
-

---

## 🔗 References

- TECH_STACK.md: `[path]`
- CODE_REVIEW.md: `[path]`
- Game folder: `[path]`
