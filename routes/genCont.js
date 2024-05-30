const express = require('express');
const router = express.Router();

//funciones mias de mi
const generarCont = require('../controllers/generarCont');

router.get('/', (req, res) => {
    const contrasenia = generarCont();
    res.render('genCont', { contrasenia });
});

module.exports = router;