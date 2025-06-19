# Deploy no GitHub Pages

## Instruções Passo a Passo

### 1. Criar Repositório no GitHub
1. Acesse https://github.com
2. Clique em "New repository" (botão verde)
3. Nome do repositório: `devocional-diario`
4. Marque como "Public"
5. NÃO marque "Add a README file" (já temos um)
6. Clique em "Create repository"

### 2. Upload dos Arquivos
Após criar o repositório, você verá uma página com instruções. Escolha a opção "uploading an existing file":

1. Clique em "uploading an existing file"
2. Arraste TODOS os arquivos desta pasta:
   - `index.html`
   - `api.html` 
   - `devocional-data.js`
   - `README.md`
   - `DEPLOY.md` (este arquivo)

3. Na caixa "Commit changes":
   - Título: "Primeira versão da API Devocional"
   - Descrição: "API completa com endpoints JSON para n8n"
   
4. Clique em "Commit changes"

### 3. Ativar GitHub Pages
1. No seu repositório, clique na aba "Settings"
2. Role a página até encontrar a seção "Pages" (no menu lateral esquerdo)
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main"
5. Deixe "/ (root)" selecionado
6. Clique em "Save"

### 4. Aguardar Deploy
- O GitHub levará alguns minutos para processar
- Você receberá um link como: `https://seu-usuario.github.io/devocional-diario/`
- Teste o link após 5-10 minutos

## URLs dos Endpoints (após deploy)

Substitua `seu-usuario` pelo seu nome de usuário do GitHub:

### Devocional de Hoje
```
https://seu-usuario.github.io/devocional-diario/api.html?endpoint=today
```

### Devocional por Data
```
https://seu-usuario.github.io/devocional-diario/api.html?endpoint=date&date=2024-01-15
```

### Devocional Aleatório
```
https://seu-usuario.github.io/devocional-diario/api.html?endpoint=random
```

### Todos os Devocionais
```
https://seu-usuario.github.io/devocional-diario/api.html?endpoint=all
```

## Testando no n8n

1. **Criar novo workflow**
2. **Adicionar nó "HTTP Request"**
3. **Configurar:**
   - Method: GET
   - URL: (uma das URLs acima)
   - Response Format: JSON
4. **Executar teste**

## Solução de Problemas

### Se o site não carregar:
- Aguarde mais alguns minutos
- Verifique se todos os arquivos foram enviados
- Confirme se o GitHub Pages está ativado

### Se o JSON não aparecer:
- Teste primeiro no navegador
- Verifique se a URL está correta
- Certifique-se de que não há erros de digitação

### Para adicionar mais devocionais:
1. Edite o arquivo `devocional-data.js`
2. Adicione novos objetos ao array `DEVOCIONAIS`
3. Faça commit das mudanças
4. O GitHub Pages atualizará automaticamente

## Suporte

Se tiver problemas, verifique:
1. Todos os arquivos foram enviados?
2. O GitHub Pages está ativado?
3. Aguardou tempo suficiente para o deploy?
4. A URL está correta?

