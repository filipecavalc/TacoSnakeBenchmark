# Teste de Capacidade de Modelos de IA com Agentes

## Objetivo

Este repositório é dedicado à avaliação da capacidade de diferentes modelos de inteligência artificial (IA) em combination com ferramentas de agentes IA, como Opencode e Claude Code, para desenvolvimento de jogos.

## 🖥️ Especificações do sistema

### 💾 Sistema Operacional

- **OS:** Windows 11 Pro
- **Build:** 26100
- **Architecture:** x64-based PC
- **Installed:** April 1st, 2024

### ⚡ Processador

- **CPU:** AMD Ryzen 7 9800X3D
- **Cores:** 8 Physical Cores
- **Threads:** 16 Logical Processors
- **Base Clock:** 4.7 GHz
- **Architecture:** Zen 5 with 3D V-Cache Technology

### 🧠 Memoria

- **Capacity:** 32 GB DDR5
- **Speed:** 6200 MHz
- **Configuration:** Dual Channel (2x 16GB)

### 🎮 GPU

- **GPU:** NVIDIA GeForce RTX 4090
- **VRAM:** ~24 GB GDDR6X
- **Driver Version:** 32.0.15.8115

### 🔧 Placa mãe

- **Brand:** ASRock
- **Model:** B650M PG Riptide
- **Chipset:** AMD B650
- **BIOS Version:** 3.10 (Updated: October 24th, 2024)
- **BIOS Vendor:** American Megatrends International, LLC.

## Benchmark

O benchmark consiste em dois prompts principais:

### Prompt 1: Definição de Stack Tecnológica

**Prompt**: "Na pasta <CAMINHO_DA_PASTA>. Criar apenas o documento de definição da stack tecnológica para um jogo Snake onde a snake come tacos, seguindo boas práticas de programação e arquitetura recomendadas. Este deve ser uma definição completa da stack tecnológica, incluindo tecnologias, frameworks e padrões de arquitetura, tudo no arquivo TECH_STACK.md. NÃO crie nenhum arquivo de implementação ou código nesta etapa. O documento deve ser criado nesta mesma pasta e deve definir quais tecnologias serão usadas para implementar o jogo em uma etapa futura."

### Prompt 2: Implementação do Jogo

Segundo chat que vai ler o documento anterior aberto

**Prompt**: "Implementar o jogo Snake com tacos baseado na stack definida. O caminho da pasta onde a stack foi definida é: <CAMINHO_DA_PASTA>. O caminho para o documento TECH_STACK.md é: <CAMINHO_DO_DOCUMENTO_TECH_STACK>. Utilize as informações do documento TECH_STACK.md para implementar o jogo. Ignore as coisas da raiz do projeto pois nao te interessam tudo que vc precisa e tudo que deve fazer deve ser dentro da pasta do indicada para o jogo. IMPORTANTE: Utilize exclusivamente o contexto da stack definida e respeite a estrutura criada. NÃO crie arquivos fora da pasta especificada para o jogo. NÃO recreate ou modifique o arquivo TECH_STACK.md - apenas use-o como referência para a implementação."

## Estrutura do Repositório

```
.
├── opencode/
│   ├── claude-4.5/
│   │   ├── TECH_STACK.md          # Documento com stack definida
│   │   └── arquivos da implementacao
│   └── qwen3-coder-30b/
│       ├── TECH_STACK.md          # Documento com stack definida
│       └── arquivos da implementacao
├── claude-code/
│   ├── claude-4.5/
│   │   ├── TECH_STACK.md          # Documento com stack definida
│   │   └── arquivos da implementacao
│   └── qwen3-coder-30b/
│       ├── TECH_STACK.md          # Documento com stack definida
│       └── arquivos da implementacao
└── resultados/
    └── benchmark_results.md   # Relatório comparativo? //TODO
```

## Metodologia

1. Cada modelo recebe o primeiro prompt para definir a stack
2. Em um segundo chat cada modelo recebe o segundo prompt para implementar o jogo
3. Avaliação dos resultados por critérios como:
   - Qualidade da stack definida
   - Correção da implementação
   - Seguimento de boas práticas
   - Estrutura do projeto
   - Escalabilidade
