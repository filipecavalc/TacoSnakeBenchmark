# AI Model Capabilities Test with Agents

## Objective

This repository is dedicated to evaluating the capabilities of different artificial intelligence (AI) models combined with AI agent tools like Opencode and Claude Code for game development.

## Benchmark

The benchmark consists of two main prompts:

### Prompt 1: Technology Stack Definition

**Prompt**: "Faça na pasta <CAMINHO_DA_PASTA>. Create a modern technology stack for a Snake game where the snake eats tacos, following good programming practices and recommended architecture, for this version can be a web version of the game, but the architecture should be designed in a way that we can create versions for other platforms in the future."

### Prompt 2: Game Implementation

Second chat that will read the previous document

**Prompt**: "Implement the Snake game with tacos based on the defined stack and the correct folder, ignore the root project things as they don't matter - everything you need to do and should do should be within the indicated folder for the game"

## Repository Structure

```
.
├── qwen3-coder-30b-opencode/
│   ├── TECH_STACK.md          # Document with defined stack
│   └── IMPLEMENTACAO.md       # Document for implementation record
└── resultados/
    └── benchmark_results.md   # Comparative report? //TODO
```

## Methodology

1. Each model receives the first prompt to define the stack
2. In a second chat, each model receives the second prompt to implement the game
3. Evaluation of results based on criteria such as:
   - Quality of the defined stack
   - Implementation correctness
   - Following of good practices
   - Project structure
   - Scalability
