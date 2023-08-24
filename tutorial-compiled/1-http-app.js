// HTTP comes in built-in module from node.
const http = require('http');
const { readFileSync } = require('fs');

//Get All Files
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {

    /** Request object has two important properties.
    * First is url, to know the URL from the request after the IP, Example: 192.168.1.1/about, then /about is sent.
    * Second is method, to know the method that is wanted by the browser. In browser's case it's almost always GET.
    **/
    const url = req.url;
    if (url === '/') {
        //Status Message right here is optional.
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(homePage);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else {
        res.writeHead(400, {'content-type' : 'text/html'});
        res.write('<h1>Page not found.</h1>');
        res.end();
    }
    console.log('URL in Request', req.url);
    
    // You attach the status code to know what is happening to the browser.
    
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