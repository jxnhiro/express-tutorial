const express = require("express");
const app = express();
let { people } = require("./data");

// Two Middlewares

// Static Assets
app.use(express.static("./methods-public"));

// Choose the right middleware by looking at the headers and the content type.
/**
 * URLEncoded middleware is used to parse form data to req.body.
 * JSON is used to parse JSON fram data to req.body.
 */

// URLEncoded example
app.use(express.urlencoded({ extended: false }));

// JSON example
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value." });
  } else {
    return res
      .status(201)
      .json({ success: true, msg: "Successful", person: name });
  }
});

/**
 * Body or payload is crucial in POST method.
 * In HTML, the name is the key of the payload.
 */

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  } else {
    res.status(201).send({ success: true, data: [...people, name] });
  }
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    return res.status(401).send("Please Provide Credentials");
  }
});

app.listen(5000, () => {});
