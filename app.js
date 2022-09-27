const express = require("express");
require('dotenv').config();
const RoutesSettings = require("./startup/RoutesSettings");
const app = express();


// DataBase Connection
require("./startup/db")();


RoutesSettings(app);
app.use(require('./startup/router'));
app.use('/images', express.static('images'))

