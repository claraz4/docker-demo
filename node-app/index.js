const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// to log the requests at every point
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Node container is running");
});

app.get("/api1", (req, res) => {
  res.send("api 1 response");
});

app.get("/api2", (req, res) => {
  res.send("api 2 response");
});

app.listen(3000);
