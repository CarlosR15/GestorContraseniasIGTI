const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contrasenias');
});

module.exports = router;