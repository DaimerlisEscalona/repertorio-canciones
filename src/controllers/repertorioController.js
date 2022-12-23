const fs = require('fs');
const path = require('path');

const controller = {
    
    load: (req, res) => {

        const fileSongs = JSON.parse(fs.readFileSync("./data/repertorio.json", "utf-8"));

        res.json(fileSongs);
    },

    addSong: (req, res) => {

        const cancion = req.body;
        const canciones = JSON.parse(fs.readFileSync("./data/repertorio.json"));

        canciones.push(cancion);
        fs.writeFileSync("./data/repertorio.json", JSON.stringify(canciones));

        res.send("Canción agregada con éxito!");
    },

    editSong: (req, resp) => {

        const { id } = req.params;
        const cancion = req.body;
        console.log(cancion);
        const canciones = JSON.parse(fs.readFileSync("./data/repertorio.json"));
        const index = canciones.findIndex((p) => p.id == id);
        canciones[index] = cancion;
        fs.writeFileSync("./data/repertorio.json", JSON.stringify(canciones));
        res.send("Canción modificada con éxito");

    },

    deleteSong: (req, resp) => {

        const { id } = req.params;
        const canciones = JSON.parse(fs.readFileSync("./data/repertorio.json"));
        const index = canciones.findIndex((p) => p.id == id);
        canciones.splice(index, 1);
        fs.writeFileSync("./data/repertorio.json", JSON.stringify(canciones));
        res.send("Canción eliminado con éxito");
    }
    
}

module.exports = controller;