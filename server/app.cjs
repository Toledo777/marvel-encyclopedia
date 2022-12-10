const express = require("express");
const app = express();
const api = require("./routes/api.cjs");
const compression = require("compression");

app.use(compression());
app.use(express.static("../client/build"));
app.use("/api", api);
app.use((req, res) => {
  res.status(404).json({error: "not supported"});
})

module.exports = app;
