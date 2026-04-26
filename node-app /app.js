const http = require('http');

http.createServer((req, res) => {
    res.end("Hello from AWS CI/CD 🚀");
}).listen(3000);
