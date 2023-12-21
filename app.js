const express = require("express");
const app = express();
// import routers
const itemsRouter = require("./routes/items");

// middleware
app.use(express.json());

// homepage - hello world
app.get("/", (req, res) => {
  res.status(200).send("hello world.");
});

app.use("/api/v1/items", itemsRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on PORT:${port}.`);
});
