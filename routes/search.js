const express = require('express');
const router = express.Router();
const dbCont = require('../controllers/contraseniasCont');
const sitiosController = require('../controllers/sitiosCont');

// Ruta para buscar productos
router.get('/', async (req, res) => {
    const usuarioId = req.user.id;

    const contrasenias = await dbCont.obtenerContPorId(usuarioId);
    const query = req.query.q ? req.query.q.toLowerCase() : '';
    const sitios = await sitiosController.obtenerSitioNomPorId(usuarioId);
    const sitiosFiltrados = sitios.filter(sitio =>
        (sitio.name && sitio.name.toLowerCase().includes(query)) || 
        (sitio.url && sitio.url.toLowerCase().includes(query))
    );
    console.log(sitiosFiltrados);
    res.render('contrasenias', { sitios: sitiosFiltrados, contrasenias: contrasenias });
});
module.exports = router;