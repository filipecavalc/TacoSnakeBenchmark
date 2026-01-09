WARNING: STILL BUILDING THE METODOLOGY, i do not know yet if i will keep this way, this Still under construction!

# TacoSnakeBenchmark

![alt](./snaaaake.gif)

## Objective

This repository is dedicated to evaluating the capabilities of different artificial intelligence (AI) models combined with AI agent tools like Opencode and Claude Code for game development.

## Ollama Settings

![alt](./Captura%20de%20tela%202026-01-09%20021958.png)

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

## Benchmark

The benchmark consists of two main prompts:

### Prompt 1: Technology Stack Definition

**Prompt**: "In the folder <FOLDER_PATH>. Create only the technology stack documentation for a Snake game where the snake eats tacos, following good programming practices and recommended architecture. This should be a comprehensive technology stack definition, including technologies, frameworks, and architecture patterns, all in the TECH_STACK.md file. Do NOT create any implementation files or code in this step. The document should be created in this same folder and should define what technologies will be used for implementing the game in a future step."

### Prompt 2: Game Implementation

Second chat that will read the previous document

**Prompt**: "Implement the Snake game with tacos based on the defined stack. The path of the folder where the stack was defined is: <FOLDER_PATH>. The path to the TECH_STACK.md document is: <TECH_STACK_DOCUMENT_PATH>. Use the information from the TECH_STACK.md document to implement the game. Ignore the root project things as they don't matter - everything you need to do and should do should be within the indicated folder for the game. IMPORTANT: Use exclusively the context of the defined stack and respect the created structure. DO NOT create files outside the specified folder for the game. DO NOT recreate or modify the TECH_STACK.md file - only use it as reference for implementation."

## Repository Structure

```
.
├── opencode/
│   ├── claude-4.5/
│   │   ├── TECH_STACK.md          # Document with defined stack
│   │   └── implementation files
│   └── qwen3-coder-30b/
│       ├── TECH_STACK.md          # Document with defined stack
│       └── implementation files
├── claude-code/
│   ├── claude-4.5/
│   │   ├── TECH_STACK.md          # Document with defined stack
│   │   └── implementation files
│   └── qwen3-coder-30b/
│       ├── TECH_STACK.md          # Document with defined stack
│       └── implementation files
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
