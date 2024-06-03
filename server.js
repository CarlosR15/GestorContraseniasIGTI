const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const authMiddleWare = require('./middlewares/autenticacion');
const LocalStrategy = require('passport-local').Strategy;
const usuarioController = require('./controllers/usuariosCont'); // Archivo contenedor de querys para MySQL
const path = require('path');
const router = require('./routes/routes');

const reqIniSes = require('./middlewares/autenticacion'); //autenticacion para logout

app.use(cookieParser());

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
        throw error;
      } else {
        return done(null, user);
      }
      
    } catch (err) {
      return done(null, false);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Tengo cancer de pancreas');
});

//Esto sirve para poder utilizar las URL como cadenas de consulta
app.use(express.urlencoded({ extended: true }));

// Configuración de la plantilla Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para procesar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));
app.use(express.json());

app.use('/', router);

//ruta para cerrar sesion
app.get('/logout', async (req, res) => {
  await req.logout(async (err) => {
    if (err) {
      // manejo del error, si es necesario
      console.error(err);
    }
    //req.session.destroy(); // Eliminar la sesion completa
    await req.session.destroy((err) => {
      if (err) {
        console.error('Error al destruir la sesión:', err);
      }
      console.log('Sesión finalizada correctamente');
    });
    // eliminar el contenido del almacen de sesiones
    await req.sessionStore.clear((err) => {
      if (err) {
        console.error('Error al limpiar el almacén de sesiones:', err);
      }
      console.log('Alamcén de sesiones finalizada correctamente');
    });
    res.clearCookie('token');
    res.redirect('/'); // redirigir a la pagina principal
  });
});

// Puerto en el que escucha el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});