const express = require('express');
const path = require('path');

const app = express();

// Setup static and middleware.
// Static means files that the server does not need to change.
app.use(express.static('./public'));

// app.get('/', (req, res)=>{
//     /**
//      * path.resolve(__dirname) allows the server to resolve the path 
//      * to the node project and then we can add the actual path to 
//      * call the resources such as the html, css and so on.
//      **/
//     console.log('YOUR PATH', path.resolve(__dirname));
//     res.sendFile(path.resolve(__dirname, './public/index.html'));
//     Options:
//     Adding to static assets.
//     SSR
// });

app.all('*', (req, res)=>{
    res.status(404).send('Resource not found.');
});

app.listen(5000, ()=>{
    console.log('Server is listening in port 5000.');
});