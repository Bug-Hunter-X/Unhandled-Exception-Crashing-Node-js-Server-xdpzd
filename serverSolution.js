const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform any necessary cleanup
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//Throwing an exception or error
throw new Error('Unhandled Exception');