 apiCrente 
# 📖 API Devocional Diário

Uma API simples em JavaScript que fornece devocionais diários em formato JSON, perfeita para integração com n8n, Zapier e outras ferramentas de automação.

## 🚀 Endpoints Disponíveis

### 1. Devocional de Hoje
```
GET https://SEU-USUARIO.github.io/apiCrente/api.html?endpoint=today
```

### 2. Devocional por Data
```
GET hhttps://SEU-USUARIO.github.io/apiCrente/api.html?endpoint=random
```

### 3. Devocional Aleatório
```
GET https://seu-usuario.github.io/apiCrente/api.html?endpoint=random
```

### 4. Todos os Devocionais
```
GET hhttps://SEU-USUARIO.github.io/apiCrente/api.html?endpoint=all
```

## 📋 Formato da Resposta JSON

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "titulo": "Confiança em Deus",
    "versiculo": "Confia no Senhor de todo o teu coração...",
    "referencia": "Provérbios 3:5",
    "reflexao": "A confiança em Deus é fundamental...",
    "oracao": "Senhor, ajuda-me a confiar em Ti...",
    "data_criacao": "2024-01-01",
    "data_solicitacao": "2024-01-15",
    "tipo": "devocional_hoje"
  }
}
```

## 🛠️ Como Fazer Deploy no GitHub Pages

### Passo 1: Criar Repositório
1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: `devocional-diario`
4. Marque como "Public"
5. Clique em "Create repository"

### Passo 2: Upload dos Arquivos
1. Clique em "uploading an existing file"
2. Arraste todos os arquivos desta pasta:
   - `index.html`
   - `api.html`
   - `devocional-data.js`
   - `README.md`
3. Adicione uma mensagem de commit: "Primeira versão da API"
4. Clique em "Commit changes"

### Passo 3: Ativar GitHub Pages
1. Vá para "Settings" do repositório
2. Role até a seção "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Selecione "main" branch
5. Clique em "Save"

### Passo 4: Acessar a API
Após alguns minutos, sua API estará disponível em:
```
https://seu-usuario.github.io/devocional-diario/
```

## 🔧 Como Usar no n8n

### Configuração do Nó HTTP Request:
- **Method**: GET
- **URL**: `https://seu-usuario.github.io/devocional-diario/api.html?endpoint=today`
- **Response Format**: JSON

### Exemplo de Workflow:
1. **Trigger**: Schedule (diário às 8h)
2. **HTTP Request**: Buscar devocional do dia
3. **Set**: Processar dados JSON
4. **Email/Slack/etc**: Enviar devocional

## 📊 Estrutura dos Dados

Cada devocional contém:
- `id`: Identificador único
- `titulo`: Título do devocional
- `versiculo`: Texto bíblico
- `referencia`: Referência bíblica
- `reflexao`: Texto de reflexão
- `oracao`: Oração sugerida
- `data_criacao`: Data de criação
- `data_solicitacao`: Data da solicitação
- `tipo`: Tipo de consulta realizada

## 🔄 Personalização

Para adicionar mais devocionais, edite o arquivo `devocional-data.js` e adicione novos objetos ao array `DEVOCIONAIS`.

## 📝 Licença

Este projeto é de domínio público. Use livremente para edificação espiritual.

---

**Desenvolvido com ❤️ para edificação espiritual**

