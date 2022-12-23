const express = require("express");
const app = express();

const indexRoutes = require('./routes/indexRoutes');

app.listen(3000, console.log("¡Servidor encendido de manera exitosa!"));

app.use(express.json());

app.use('/', indexRoutes);

app.use('*', function (req, res) {

    res.send("Error. Intente nuevamente con una ruta correcta.");

});
