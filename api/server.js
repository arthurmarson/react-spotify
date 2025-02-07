const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('./artists.json');
const middlewares = jsonServer.defaults();

// Configuração do CORS
server.use(cors());
server.use(middlewares);

// Adiciona um endpoint de health check
server.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});

server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});