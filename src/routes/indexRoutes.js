const express = require('express');
const app = express();

const indexController = require('./../controllers/indexController')
const repertorioRoutes = require('./repertorioRoutes')

app.get("/", indexController.load);
app.use('/canciones', repertorioRoutes);


module.exports = app;


