const express = require('express');
const app = express();

const consign = require('consign');

require('dotenv').config();

app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use(express.static("./app/public"));

consign()
    .include("./app/controllers")
    .then("./app/routes")
    .into(app);

module.exports = app;