const express = require('express');
const router = express.Router();
const dbSitio = require('../controllers/sitiosCont');
const reqIniSes = require('../middlewares/autenticacion');

router.get('/', reqIniSes.authenticate, async (req, res) => {
    contrasenia = req.body;
    if (contrasenia === undefined) {
        contrasenia = '';
    }
    res.render('addCont');
});

router.post('/', (req, res) => {
    contrasenia = req.body;
    if (contrasenia === undefined) {
        contrasenia = '';
    }
    res.render('addCont', { contrasenia });
});

module.exports = router;