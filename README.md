# apiCrente

API simples para fornecer Devocionais Diários em formato JSON.

Este projeto é uma API REST feita em Node.js com Express que lê um arquivo JSON contendo devocionais e fornece um endpoint para retornar um devocional aleatório.

---

## Funcionalidades

- Lê os devocionais do arquivo `devocionais.json`
- Endpoint para obter um devocional aleatório: `GET /devocional/random`
- Projeto básico para estudos e expansão futura

---

## Estrutura do Projeto

apiCrente/
│
├── app.js # Código principal da API (servidor Express)
├── devocionais.json # Arquivo JSON com os devocionais
├── index.html # Página de exemplo (se houver)
├── package.json # Configurações do projeto e dependências
├── package-lock.json # Arquivo gerado pelo npm
├── script.js # Scripts adicionais (se houver)
├── node_modules/ # Dependências instaladas
└── .idea/ # Configurações do IDE (se houver)

yaml
Copiar
Editar

---

## Como usar

### Pré-requisitos

- Node.js instalado ([https://nodejs.org](https://nodejs.org))
- npm (vem junto com Node.js)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/CharlesThomaz/apiCrente.git
cd apiCrente
Instale as dependências:

bash
Copiar
Editar
npm install
Executar o servidor
bash
Copiar
Editar
node app.js
Por padrão, o servidor vai rodar na porta 3000.

Testar o endpoint
Abra o navegador ou use o Postman e acesse:

bash
Copiar
Editar
http://localhost:3000/devocional/random
Você vai receber um devocional aleatório em JSON.

Como adicionar devocionais
Edite o arquivo devocionais.json e adicione seus devocionais com o seguinte formato:

json
Copiar
Editar
[
  {
    "id": 1,
    "titulo": "Confiança em Deus",
    "versiculo": "Provérbios 3:5-6",
    "mensagem": "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    "oracao": "Senhor, ajuda-me a confiar em Ti em todas as situações."
  },
  ...
]
Tecnologias utilizadas
Node.js

Express

JSON

Contato
Desenvolvido por Charles Thomaz

Licença
Projeto aberto para estudo e uso pessoal.