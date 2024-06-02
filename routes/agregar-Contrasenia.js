const express = require('express');
const router = express.Router();
const contraseniasController = require('../controllers/contraseniasCont'); // Archivo contenedor de querys para MySQL
const reqIniSes = require('../middlewares/autenticacion');

// Ruta para manejar el registro de usuarios
router.post('/', reqIniSes.authenticate, async (req, res) => {
    const id_usuario = req.user.id;
    const { sitio_id, usuario, contrasenia } = req.body;

    try {

        // Registrar el contraseña en la base de datos
        await contraseniasController.agregarCont(id_usuario, sitio_id, usuario, contrasenia);

        // Contraseña insertado correctamente
        res.redirect('/contrasenias');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error interno del servidor AAAA');
    }
});

module.exports = router;