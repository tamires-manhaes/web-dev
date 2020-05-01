const moduloA = require('./moduloA');

console.log(moduloA.bemVindo);

const http = require('http');
http.createServer((req, res) => {
    res.write('hello there!');
    res.end()
}).listen(8080);