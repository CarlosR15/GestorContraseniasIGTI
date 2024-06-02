const express = require('express');
const router = express.Router();

//funciones mias de mi
const generarCont = require('../controllers/generarCont');

router.get('/', (req, res) => {
    res.render('genCont', { contrasenia: '' });
});

router.post('/', (req, res) => {
    const { tamanio, mayus, minus, num, caracEsp } = req.body;
    const opciones = {
        tamanio: parseInt(tamanio),
        mayus: !!mayus,
        minus: !!minus,
        num: !!num,
        caracEsp: !!caracEsp
    };
    const contrasenia = generarCont(opciones);
    res.render('genCont', { contrasenia, opciones });
});

module.exports = router;