const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const contrasenias = require('./contrasenias');
const agregarcont = require('./addCont');
const generarCont = require ('./genCont');
const login = require ('./login');
const register = require ('./register');
const registrarUser = require('./register-user');

// Configura las rutas
router.use('/', index);
router.use('/contrasenias', contrasenias);
router.use('/addCont', agregarcont);
router.use('/genCont', generarCont);
router.use('/login', login);
router.use('/register', register);
router.use('/register-user', registrarUser);

module.exports = router;