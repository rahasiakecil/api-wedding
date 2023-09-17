const express = require("express");
const app = express();
const cors = require("cors");
const { port } = require("./config/config");
var tamuRoutes = require("./routes/tamu");
const bodyParser = require('body-parser');

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Api wedding !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/tamu", tamuRoutes);
