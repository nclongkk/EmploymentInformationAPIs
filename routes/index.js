const express = require("express");
const app = express();

app.use("/bootcamps", require("./bootcamps"));

module.exports = app;
