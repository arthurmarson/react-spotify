const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./artists.json'); // Caminho para o arquivo JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});