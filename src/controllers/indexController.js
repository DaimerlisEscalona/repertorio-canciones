const path = require('path');

const controller = {
    
    load: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    },
    
}

module.exports = controller;