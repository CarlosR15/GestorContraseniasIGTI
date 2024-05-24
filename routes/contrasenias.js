const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contraseniasVist');
});

module.exports = router;