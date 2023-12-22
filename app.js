const express = require("express");
const app = express();
// import routers
const itemsRouter = require("./routes/items");

const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// homepage - hello world
app.get("/", (req, res) => {
  res.status(200).send("hello world.");
});

app.use("/api/v1/items", itemsRouter);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB...");
    app.listen(port, () => {
      console.log(`Listening on PORT:${port}.`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
