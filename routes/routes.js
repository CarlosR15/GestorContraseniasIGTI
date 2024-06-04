const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const login = require ('./login');
const register = require ('./register');
const contrasenias = require('./contrasenias');
const agregarcont = require('./addCont');
const generarCont = require('./genCont');
const agregarContABD = require('./agregar-Contrasenia');
const eliminarContPorId = require('./borrarContrasenia');
const registrarUser = require('./register-user');
const addSitioWeb = require ('./addSitioWeb');
const agregarSitioWeb = require ('./agregar-SitioWeb');
const obtenerSitiosPorId = require('./obtenerSitios');
const searchSites = require('./search');


// Configura las rutas
router.use('/', index);
router.use('/login', login);
router.use('/register', register);
router.use('/register-user', registrarUser);
router.use('/contrasenias', contrasenias);
router.use('/addCont', agregarcont);
router.use('/genCont', generarCont);
router.use('/agregar-Contrasenia', agregarContABD);
router.use('/borrarContrasenia', eliminarContPorId);
router.use('/addSitioWeb', addSitioWeb);
router.use('/agregar-SitioWeb', agregarSitioWeb);
router.use('/obtenerSitios', obtenerSitiosPorId);
router.use('/search', searchSites);


module.exports = router;