// controllers/productos.js
const sitiosModel = require('../models/sitiosModel');

// Función asincrónica para registrar un usuario
async function agregarSitio(id_usuario, name, url) {
  const sitioWeb = { 
    id_usuario:id_usuario, 
    name:name, 
    url:url 
  }
  // Se registra al usuario en la base de datos
  return await sitiosModel.agregarSitio(sitioWeb);
}

async function obtenerSitios() {
  return await sitiosModel.obtenerSitios();
}

async function obtenerSitioNomPorId(usuarioId) {
  return await sitiosModel.obtenerSitioNomPorId(usuarioId);
}

module.exports = {
    obtenerSitios,
    agregarSitio,
    obtenerSitioNomPorId
};