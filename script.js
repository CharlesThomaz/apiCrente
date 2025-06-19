fetch('devocionais.json')
  .then(res => res.json())
  .then(data => {
    console.log(data); // exibe o array de devocionais
  })
  .catch(err => console.error('Erro ao carregar JSON', err));
