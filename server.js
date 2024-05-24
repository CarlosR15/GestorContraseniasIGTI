const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const router = require('./routes/routes');

dotenv.config();

// Configurar middleware para manejar sesiones
app.use(session({
    secret: process.env.ACCESS_TOKEN_SECRET, // Clave secreta para firmar la cookie de sesión
    resave: false,
    saveUninitialized: false,
}));

// Configurar Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configurar estrategia de autenticación local
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await usuarioController.logearUsuario(username, password);
      if (!user) {
        return done(null, false, { message: 'Usuario o contraseña incorrecto' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Tengo cancer de pancreas');
});

// Configuración de la plantilla Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', router);

// Puerto en el que escucha el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});