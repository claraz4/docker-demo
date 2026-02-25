const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.send("Node container is running");
});

app.listen(3000, () => {
 console.log("Node app listening on port 3000");
});
