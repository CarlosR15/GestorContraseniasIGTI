const express = require('express');
const router = express.Router();
const sitiosController = require('../controllers/sitiosCont');

// Ruta para buscar productos
router.get('/', async (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';
    const sitios = await sitiosController.obtenerSitios();
    const sitiosFiltrados = sitios.filter(sitio =>
        (sitio.name && sitio.name.toLowerCase().includes(query)) || 
        (sitio.url && sitio.url.toLowerCase().includes(query))
    );
    res.render('contrasenias', { sitios: sitiosFiltrados });
});
module.exports = router;