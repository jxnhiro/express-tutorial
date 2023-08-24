// HTTP comes in built-in module from node.
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1>Home Page</h1>');
    res.end();
});

// React 3000, Gatsby 8000
server.listen(5000);

/**
 * HTTP Status Codes
 * ================================= 
 * 
 * Informational responses (100-199)
 * Successful responses (200 - 299)
 * Redirects (300-399)
 * Client errors (400-499)
 * Server errors (500-599)
 * 
 * Go to developer.mozilla.org/en-US/docs/Web/HTTP/Status to learn more about status codes.
 */