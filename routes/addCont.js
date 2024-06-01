const express = require('express');
const router = express.Router();
const dbSitio = require('../controllers/sitiosCont');
const reqIniSes = require('../middlewares/autenticacion');

router.get('/', reqIniSes.authenticate, async (req, res) => {
    res.render('addCont');
});

module.exports = router;