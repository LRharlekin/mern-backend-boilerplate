// listen to route '/hello' on port 5000
const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).send("hello world.");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on PORT:${port}.`);
});
