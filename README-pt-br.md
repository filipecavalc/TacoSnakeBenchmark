# Teste de Capacidade de Modelos de IA com Agentes

## Objetivo

Este repositório é dedicado à avaliação da capacidade de diferentes modelos de inteligência artificial (IA) em combination com ferramentas de agentes IA, como Opencode e Claude Code, para desenvolvimento de jogos.

## Benchmark

O benchmark consiste em dois prompts principais:

### Prompt 1: Definição de Stack Tecnológica

**Prompt**: "Na pasta <CAMINHO_DA_PASTA>. Criar uma stack tecnológica moderna para um jogo Snake, onde a snake come tacos, seguindo boas práticas de programação e arquitetura recomendadas, para essa versao pode ser uma versao do jogo web, mas a arquitetura deve ser pensada de um jeito que possamos no futuro criar versoes para outras plataformas. IMPORTANTE: Certifique-se de que todas as implementações sejam feitas apenas dentro da pasta especificada, respeitando o contexto e não criando arquivos fora desta área. O documento TECH_STACK.md deve ser criado nesta mesma pasta."

### Prompt 2: Implementação do Jogo

Segundo chat que vai ler o documento anterior aberto

**Prompt**: "Implementar o jogo Snake com tacos baseado na stack definida. O caminho da pasta onde a stack foi definida é: <CAMINHO_DA_PASTA>. O caminho para o documento TECH_STACK.md é: <CAMINHO_DO_DOCUMENTO_TECH_STACK>. Utilize as informações do documento TECH_STACK.md para implementar o jogo. Ignore as coisas da raiz do projeto pois nao te interessam tudo que vc precisa e tudo que deve fazer deve ser dentro da pasta do indicada para o jogo. IMPORTANTE: Utilize exclusivamente o contexto da stack definida e respeite a estrutura criada. NÃO crie arquivos fora da pasta especificada para o jogo."

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
