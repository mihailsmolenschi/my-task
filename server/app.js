const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 5500;

const thingsJson = require("./data/things.json");
const areasJson = require("./data/areas.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/things", (req, res) => {
  console.log("/things");
  res.json(thingsJson);
});

app.get("/areas", (req, res) => {
  console.log("/areas");
  res.json(areasJson);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
