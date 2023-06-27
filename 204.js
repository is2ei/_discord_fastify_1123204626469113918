import http from 'node:http';

http.createServer(function (request, response) {
  response.writeHead(204);
  response.end('Body text');
}).listen(3000);
