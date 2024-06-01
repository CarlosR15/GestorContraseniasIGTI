const express = require('express');
const router = express.Router();
const dbCont = require('../controllers/contraseniasCont');
const reqIniSes = require('../middlewares/autenticacion');

router.get('/', reqIniSes.authenticate, async (req, res) => {
    try {
        // obtener el ID del usuario de la sesion
        const usuarioId = req.user.id;

        // obtener las imágenes del usuario
        const contrasenias = await dbCont.obtenerContPorId(usuarioId);
        console.log(contrasenias);
    res.render('contrasenias', { contrasenias });
    } catch (error) { //captura el error y lo imprime en la consola
        console.error('Error al obtener contraseñas del usuario:', error);
    }
});

module.exports = router;