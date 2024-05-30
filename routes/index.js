// routes/index.js
const express = require('express');
const router = express.Router();
// const { generateToken } = require('../models/autenticacion');
// const passport = require('passport');

// Rutas públicas
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;