const express = require('express');
const router = express.Router();
const sitiosController = require('../controllers/sitiosCont'); // Archivo contenedor de querys para MySQL
const reqIniSes = require('../middlewares/autenticacion');

// Ruta para manejar el registro de usuarios
router.post('/', reqIniSes.authenticate, async (req, res) => {
    const id_usuario = req.user.id;
    const { name, url } = req.body;

    try {

        // Registrar el usuario en la base de datos
        await sitiosController.agregarSitio(id_usuario, name, url);

        // Usuario insertado correctamente
        res.redirect('/contrasenias');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error interno del servidor AAAA');
    }
});

module.exports = router;