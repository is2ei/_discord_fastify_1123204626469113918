import http from 'http';

http.createServer(function (request, response) {
  response.writeHead(200);
  response.end('Body text');
}).listen(3000);
