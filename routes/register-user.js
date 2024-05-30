const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosCont'); // Archivo contenedor de querys para MySQL
const autenticacion = require('../middlewares/autenticacion');

// Ruta para manejar el registro de usuarios
router.post('/', async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        // Hash de la contraseña
        const password_hash = await autenticacion.getHash(password);

        // Registrar el usuario en la base de datos
        await usuarioController.registrarUsuario(nombre, email, password_hash);

        // Usuario insertado correctamente
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error interno del servidor AAAA');
    }
});

module.exports = router;