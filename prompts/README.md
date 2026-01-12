# Benchmark Prompts

This folder contains the standardized prompts for the Taco Snake Benchmark.

## Files

- `game_specification.md` - ⭐ Complete game specification (shared across all steps)
- `step1_planning.md` - Technology stack planning prompt
- `step2_implementation.md` - Game implementation prompt
- `step3_code_review.md` - Code review and analysis prompt

## How to Use

Each prompt references `game_specification.md` for game requirements. Always include both files when running steps.

### Step 1 Example (Planning)
```
@game_specification.md
@step1_planning.md

Folder: ./opencode/claude-sonnet-4.5
```

### Step 2 Example (Implementation)
```
@game_specification.md
@step2_implementation.md

Folder: ./opencode/claude-sonnet-4.5
Tech stack document: ./opencode/claude-sonnet-4.5/TECH_STACK.md
```

### Step 3 Example (Code Review)
```
@game_specification.md
@step3_code_review.md

Folder: ./opencode/claude-sonnet-4.5
```

## Important Notes

- **Fresh context**: Each step should be run in a NEW chat session (context cleared)
- **No modifications**: These prompt files should never be edited - pass specific paths when using them
- **One-shot approach**: Each step should complete successfully without iterations
- **Sequential**: Steps must be run in order (1 → 2 → 3)

## Workflow

1. **Step 1**: Start new chat → Reference `step1_planning.md` → Provide folder path
2. **Step 2**: Start new chat → Reference `step2_implementation.md` → Provide folder and tech stack paths
3. **Step 3**: Start new chat → Reference `step3_code_review.md` → Provide folder path

After Step 3, perform manual evaluation using the EVALUATION.md template.
