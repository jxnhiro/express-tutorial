const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger.js");
const authorize = require("./authorize.js");

// req => middleware => res

// 1. Use VS Route
// 2. Options - Our Own / Express / Third Party

/**
 * First middleware function
 * Two issues:
 * Our app.js is clonky
 * It is better to have the logger function in other file.
 **/

// Puts public folder
// TODO: app.use(express.static(./public));
// APP USES ORDER MATTER
// TODO: app.use(logger);

// This uses the middleware in routes after /api
// TODO: app.use("/api", logger);

// Multiple middleware should be placed in array.
// Middleware is executed in order.
// app.use([authorize, logger]);
// TODO: app.use([logger, authorize]);

// Morgan, returns token method, token url, token status, and token response time.
// https://www.npmjs.com/package/morgan

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

// app.get("/api/items", [authorize, logger], (req, res) => {
//   console.log(req.user);
//   res.send("Items");
// })

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
