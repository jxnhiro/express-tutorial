const express = require("express");
const app = express();
let { people } = require("./data");

// Two Middlewares

// Static Assets
app.use(express.static("./methods-public"));

// URLEncoded middleware is used to parse form data to req.body.
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

/**
 * Body or payload is crucial in POST method.
 * In HTML, the name is the key of the payload.
 */

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    return res.status(401).send("Please Provide Credentials");
  }
});

app.listen(5000, () => {});
