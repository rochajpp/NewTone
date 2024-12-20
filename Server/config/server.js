const express = require('express');
const app = express();


const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(cors());
app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({extended: true}));



consign()
    .include("./app/controllers")
    .then("./app/routes")
    .into(app);

module.exports = app;