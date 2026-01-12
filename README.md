# TacoSnakeBenchmark

![alt](./snaaaake.gif)

## 📖 Objective

This repository provides a standardized benchmark to evaluate the capabilities of different AI models combined with AI coding tools (Claude Code, Opencode, etc.) for game development.

The benchmark uses a **one-shot approach** where models must deliver a fully functional Taco Snake game without iteration, testing their ability to:
- Plan appropriate technology stacks
- Implement complete game functionality
- Write clean, well-structured code
- Self-evaluate their own implementations


## 🖥️ System Specifications

### 💾 Operating System

- **OS:** Windows 11 Pro
- **Build:** 26100
- **Architecture:** x64-based PC
- **Installed:** April 1st, 2024

### ⚡ Processor

- **CPU:** AMD Ryzen 7 9800X3D
- **Cores:** 8 Physical Cores
- **Threads:** 16 Logical Processors
- **Base Clock:** 4.7 GHz
- **Architecture:** Zen 5 with 3D V-Cache Technology

### 🧠 Memory

- **Capacity:** 32 GB DDR5
- **Speed:** 6200 MHz
- **Configuration:** Dual Channel (2x 16GB)

### 🎮 Graphics Card

- **GPU:** NVIDIA GeForce RTX 4090
- **VRAM:** ~24 GB GDDR6X
- **Driver Version:** 32.0.15.8115

### 🔧 Motherboard

- **Brand:** ASRock
- **Model:** B650M PG Riptide
- **Chipset:** AMD B650
- **BIOS Version:** 3.10 (Updated: October 24th, 2024)
- **BIOS Vendor:** American Megatrends International, LLC.

## 🎯 Benchmark Methodology

### Overview

- **One-shot benchmark**: Models must deliver working implementation without iteration
- **3 steps with fresh context**: Each step runs in a new chat session
- **Standardized prompts**: All models receive identical requirements for fair comparison
- **Focus**: Functional game delivery with proper architecture and code quality

### The Three Steps

#### **Step 1: Technology Stack Planning**
- **Input**: Game requirements from `game_specification.md`
- **Task**: Model plans appropriate technology stack
- **Output**: `TECH_STACK.md` with technologies, architecture, and structure
- **Context**: Fresh chat (no previous context)

#### **Step 2: Game Implementation**
- **Input**: `game_specification.md` + `TECH_STACK.md`
- **Task**: Model implements complete working game
- **Output**: Game files + `README.md` with setup instructions
- **Context**: Fresh chat (no context from Step 1)

#### **Step 3: Code Review**
- **Input**: `game_specification.md` + all implementation files
- **Task**: Model reviews and evaluates the implementation
- **Output**: `CODE_REVIEW.md` with scores and analysis
- **Context**: Fresh chat (no context from previous steps)

#### **Manual Evaluation**
- **Task**: You test the game and fill evaluation template
- **Output**: `EVALUATION.md` with final scores
- **Purpose**: Objective assessment of actual functionality

### Game Specification

All implementations must meet requirements defined in `./prompts/game_specification.md`:

**Core Features**:
- Snake movement (4 directions, no reverse)
- Snake growth when eating tacos
- Score system (10 points per taco)
- Collision detection (walls and self)
- Game Over screen with restart
- Visual requirements (taco must be recognizable 🌮)

**Technical Requirements**:
- Runs in modern web browser
- Testable locally without complex setup
- No backend or database required

## 📁 Repository Structure

```
.
├── prompts/                        # Standardized benchmark prompts
│   ├── game_specification.md      # Game requirements (shared across all steps)
│   ├── step1_planning.md          # Planning step prompt
│   ├── step2_implementation.md    # Implementation step prompt
│   ├── step3_code_review.md       # Code review step prompt
│   └── README.md                  # Prompt usage guide
│
├── templates/                      # Evaluation templates
│   ├── EVALUATION_TEMPLATE.md            # Individual model evaluation
│   ├── BENCHMARK_COMPARISON_TEMPLATE.md  # Cross-model comparison
│   └── README.md                         # Scoring system guide
│
├── opencode/                       # Results using Opencode
│   └── [model-name]/              # e.g., qwen3-coder-30b, claude-sonnet-4.5
│       ├── TECH_STACK.md          # Step 1 output
│       ├── CODE_REVIEW.md         # Step 3 output
│       ├── EVALUATION.md          # Manual evaluation
│       ├── README.md              # Game documentation
│       └── [game files]           # Step 2 implementation
│
├── claude-code/                    # Results using Claude Code
│   └── [model-name]/
│       └── ... (same structure)
│
└── results/                        # Final comparison
    └── BENCHMARK_COMPARISON.md    # Comparative analysis of all models
```

## 🚀 How to Run the Benchmark

### Prerequisites

- AI coding tool installed (Claude Code, Opencode, etc.)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (optional, for version control)

### Running for a Model

#### Step 1: Planning (Fresh Chat)

```
@game_specification.md
@step1_planning.md

Folder: ./[tool-name]/[model-name]
```

Example:
```
@game_specification.md
@step1_planning.md

Folder: ./claude-code/claude-sonnet-4.5
```

Wait for `TECH_STACK.md` to be created in the specified folder.

#### Step 2: Implementation (New Fresh Chat)

Close previous chat and start a new one:

```
@game_specification.md
@step2_implementation.md

Folder: ./[tool-name]/[model-name]
Tech stack document: ./[tool-name]/[model-name]/TECH_STACK.md
```

Wait for game implementation and `README.md` to be created.

#### Step 3: Code Review (New Fresh Chat)

Close previous chat and start a new one:

```
@game_specification.md
@step3_code_review.md

Folder: ./[tool-name]/[model-name]
```

Wait for `CODE_REVIEW.md` to be created.

#### Manual Evaluation

1. **Test the game**:
   - Follow instructions in the game's `README.md`
   - Open the game in your browser
   - Test each feature systematically

2. **Fill evaluation template**:
   ```bash
   cp templates/EVALUATION_TEMPLATE.md ./[tool-name]/[model-name]/EVALUATION.md
   ```

3. **Complete the checklist**:
   - Mark each feature as working ✅ or failing ❌
   - Record metrics (attempts, console errors, files created)
   - Import scores from `CODE_REVIEW.md`
   - Calculate final score using provided formula
   - Add your notes and observations

### After Evaluating All Models

1. **Create comparison report**:
   ```bash
   cp templates/BENCHMARK_COMPARISON_TEMPLATE.md ./results/BENCHMARK_COMPARISON.md
   ```

2. **Fill comparison**:
   - Aggregate data from all `EVALUATION.md` files
   - Fill summary table and rankings
   - Compare feature implementation across models
   - Draw insights and conclusions

## 📊 Scoring System

### Score Formula

```
Final Score = (Functional × 40%) + (Visual × 20%) + (Technical × 20%) + (Quality × 20%)
```

### Score Categories

| Category | Weight | Description | Max Points |
|----------|--------|-------------|------------|
| **Functional** | 40% | Core gameplay features implemented | 15 features |
| **Visual** | 20% | Visual requirements met | 7 requirements |
| **Technical** | 20% | Technical requirements met | 6 requirements |
| **Quality** | 20% | Code review average score | 10 points |

### Pass/Fail Criteria

✅ **PASS** if ALL of these are true:
- Functional Score ≥ 80%
- No critical bugs (game-breaking errors)
- Game is playable end-to-end

❌ **FAIL** otherwise

### Note on Performance Metrics

**Time and token metrics are NOT used for comparison** because:
- Local models: Performance depends on hardware (CPU/GPU)
- Cloud models: Different API latencies and infrastructure
- These metrics don't reflect code quality or capability

These can be recorded for reference but should not influence rankings.

## 📚 Documentation

- **Prompt Details**: See [`./prompts/README.md`](./prompts/README.md)
- **Evaluation Guide**: See [`./templates/README.md`](./templates/README.md)
- **Game Requirements**: See [`./prompts/game_specification.md`](./prompts/game_specification.md)

## 🤝 Using This Benchmark

Feel free to:
- ✅ Run this benchmark with any AI model
- ✅ Modify game requirements (edit `game_specification.md`)
- ✅ Add new evaluation criteria
- ✅ Share your results

When sharing results, please:
- Include your `EVALUATION.md` files
- Specify model versions and tools used
- Note your system specifications (especially for local models)
- Link back to this repository

## 📝 Notes

- **One-shot approach**: Models must deliver working game without iteration or correction
- **Fresh context**: Each step runs in new chat to avoid context advantage
- **Standardized**: All models receive identical prompts and requirements
- **Fair comparison**: Hardware-dependent metrics (time/tokens) excluded from rankings
- **Transparency**: All prompts and evaluation criteria are publicly available
