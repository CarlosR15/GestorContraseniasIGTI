const express = require('express');
const router = express.Router();
const dbSitio = require('../controllers/sitiosCont');
const reqIniSes = require('../middlewares/autenticacion');

router.get('/', reqIniSes.authenticate, async (req, res) => {
    try {
        // obtener el ID del usuario de la sesion
        const usuarioId = req.user.id;
    
        // obtener las imágenes del usuario
        const sitios = await dbSitio.obtenerSitioNomPorId(usuarioId);
        console.log(sitios);
        res.json(sitios);
    } catch (error) { //captura el error y lo imprime en la consola
        console.error('Error al obtener sitios del usuario:', error);
    }
});

module.exports = router;