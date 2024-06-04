const express = require('express');
const router = express.Router();
const passport = require('passport');
const authMiddleware = require('../middlewares/autenticacion'); // Middleware para proteger rutas


router.post('/', passport.authenticate('local', {
  failureRedirect: '/',
}), async (req, res) => {
  // Si se autentica correctamente, crea un token JWT
  const token = authMiddleware.generateToken(req.user.id, '1h');

  res.cookie('token', token, { httpOnly: true, secure: false });
  res.redirect('/contrasenias');
});

module.exports = router;