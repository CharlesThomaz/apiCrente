const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Lê e carrega o arquivo JSON
let devocionais = [];
try {
  const data = fs.readFileSync('devocionais.json', 'utf-8');
  devocionais = JSON.parse(data);
} catch (err) {
  console.error('Erro ao ler o arquivo devocionais.json:', err);
  process.exit(1);
}

// Endpoint para devocional aleatório
app.get('/devocional/random', (req, res) => {
  if (devocionais.length === 0) {
    return res.status(404).json({ error: 'Nenhum devocional encontrado.' });
  }
  const randomIndex = Math.floor(Math.random() * devocionais.length);
  const devocional = devocionais[randomIndex];
  res.json(devocional);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
