// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Rotas customizadas (se necessário)
  server.get('/custom-route', (req, res) => {
    return res.send('Essa é uma rota customizada!');
  });

  // Usando o roteamento padrão do Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Servidor rodando na porta 3000');
  });
});
