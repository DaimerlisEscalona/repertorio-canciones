const express = require('express');
const router = express.Router();

const repertorioController = require('../controllers/repertorioController')

router.get('/', repertorioController.load)
router.post('/', repertorioController.addSong)
router.put('/canciones/:id', repertorioController.editSong)
router.delete('canciones/:id', repertorioController.deleteSong)


module.exports = router;
