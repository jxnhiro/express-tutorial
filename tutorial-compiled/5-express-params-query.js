const express = require('express');
const app = express();

const {products} = require('../data.js');

// API vs SSR

/**
 * API means sending data th
 * rough HTTP Interace
 * Server responds by sending a JSON - JavaScript Object Notation
 * RES.JSON method will do all the heavy lifting.
 **/

/**
 * SSR means server-side rendering
 * This is where we set template and we send HTML, CSS, and JavaScript files
 * themselves with RES.RENDER()
 */

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
});

app.get('/api/products', (req, res) => {
    // For loop on each product.
    const newProduct = products.map((product) => {
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProduct)
})

// Route Parameters
app.get('/api/products/:productID', (req, res) => {
    // The route parameter is always in string.
    const productId = req.params.productID;
    const singleProduct = products.find((product) => product.id === Number(productId));

    if (!singleProduct){
        return res.status(404).send('Product does not exist');
    } else {
        return res.json(singleProduct);
    }
});

// Reviews is hotcoded. Route parameter is only the one with the colons.
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello world.');
})

// Request Queries
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    // Copy this array
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    } 
    
    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    
    // TODO: Always always send JSOn with return, this avoids Error of [ERR_HTTP_HEADERS_SENT]
    if (sortedProducts.length < 1) {
        return res.status(200).json(
            {
                success: true, 
                data: []
            }
        )
    }

    res.status(200).json(sortedProducts);
});

app.all('*', (req, res)=>{
    res.status(404).json(
        {'Error': 'Resource Not Found'}
    );
});

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000..');
});