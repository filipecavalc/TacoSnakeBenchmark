# Jogo da Snake - Edição Taco

Uma implementação divertida do clássico jogo Snake com tema de taco, construído usando HTML5 Canvas API, JavaScript (ES2020+), e CSS3.

## Recursos

- Jogabilidade clássica do Snake com tema de taco
- Design responsivo que funciona em desktop e mobile
- Rastreamento de pontuação com persistência de pontuação máxima
- Progressão de níveis com dificuldade aumentando
- Funcionalidades de início, pausa e fim de jogo
- Animações suaves usando RequestAnimationFrame
- Controles por touch e teclado

## Pilha de Tecnologias

Este projeto segue a pilha de tecnologias definida em TECH_STACK.md:

- **HTML5 Canvas API** - Para renderizar o tabuleiro do jogo e movimentos da cobra
- **JavaScript (ES2020+)** - Implementação primária da lógica do jogo
- **CSS3** - Estilo e design responsivo
- **Sem framework** - JavaScript puro para máximo de desempenho e controle
- **Webpack** - Empacotador de módulos para desenvolvimento e builds de produção
- **Jest** - Para testes unitários da lógica do jogo
- **ESLint** - Linting de código para JavaScript
- **Prettier** - Formatação de código

## Como Executar

1. Certifique-se de ter o Node.js instalado
2. Abra um terminal no diretório do projeto
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
5. Abra seu navegador e vá para `http://localhost:3000`

## Controles

- **Setas** ou **WASD** - Controlar a direção da cobra
- **Barra de espaço** - Pausar/retomar o jogo
- **Botão Iniciar Jogo** - Começar um novo jogo
- **Botão Pausar** - Pausar o jogo
- **Botão Reiniciar Jogo** - Reiniciar o jogo a qualquer momento

## Regras do Jogo

- Controle a cobra para comer tacos (comida) e crescer para ganhar pontos
- Cada taco comido dá 10 pontos
- A cada 50 pontos, o nível do jogo aumenta e a velocidade aumenta
- Evite bater nas paredes
- Evite colidir com o próprio corpo da cobra
- O jogo termina quando a cobra bate em uma parede ou em si mesma

## Estrutura do Projeto

```
.
├── index.html              # Arquivo HTML principal
├── package.json            # Dependências do projeto e scripts
├── webpack.config.js       # Configuração do Webpack
├── .eslintrc.json          # Configuração do ESLint
├── __tests__/              # Arquivos de teste
│   └── game.test.js        # Testes da lógica do jogo
├── src/
│   ├── js/
│   │   └── main.js         # Lógica principal do jogo e implementação
│   └── css/
│       └── style.css       # Estilo do jogo
└── README.md               # Este arquivo
```

## Desenvolvimento

Para executar testes:
```bash
npm test
```

Para fazer linting do código:
```bash
npm run lint
```

Para construir para produção:
```bash
npm run build
```

## Contribuindo

Esta é uma implementação simples educacional do jogo Snake. Sinta-se à vontade para fazer fork e melhorá-lo!

## Licença

MIT