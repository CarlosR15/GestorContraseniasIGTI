const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const contrasenias = require('./contrasenias');
const agregarcont = require('./addCont');

// Configura las rutas
router.use('/', index);
router.use('/contrasenias', contrasenias);
router.use('/addCont', agregarcont);

module.exports = router;