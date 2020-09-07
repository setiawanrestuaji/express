// const express = require('express')

// const app = express()

// app.use('/', (req, res) => {
//   res.json({
//     msg: 'success'
//   })
// })

// app.listen(3000, () => {
//   console.log('Server running on port 3000')
// })
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(3000, "0.0.0.0");

console.log('Server running at http://192.168.1.1:80/');