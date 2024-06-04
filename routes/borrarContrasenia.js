const express = require('express');
const router = express.Router();
const contraseniasController = require('../controllers/contraseniasCont');
const reqIniSes = require('../middlewares/autenticacion');

router.post('/', reqIniSes.authenticate, async (req, res) => { 
    const { idContrasenia } = req.body;

    try {
        // Eliminar la contraseña en la base de datos
        await contraseniasController.eliminarCont(idContrasenia);
    
        // Contraseña eliminada correctamente
        res.status(200).json({ message: 'Contraseña eliminada exitosamente' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error interno del servidor AAAA');
    }
});

module.exports = router;