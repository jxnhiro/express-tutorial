const express = require("express");
const app = express();

const logger = require("./logger.js");

// req => middleware => res

/**
 * First middleware function
 * Two issues:
 * Our app.js is clonky
 * It is better to have the logger function in other file.
 **/

// APP USES ORDER MATTER
app.use(logger);
// This uses the middleware in routes after /api
app.use("/api", logger);

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
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
