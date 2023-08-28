const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");
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

app.use("/api/people", people);

app.use("/api/auth", auth);

app.listen(5000, () => {});
