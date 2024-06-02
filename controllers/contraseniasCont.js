const contraseniasModel = require('../models/contraseniasModel');



async function obtenerContPorId(usuarioId) {
    return await contraseniasModel.obtenerContPorId(usuarioId);
}

async function agregarCont(id_usuario, sitio_id, usuario, contrasenia) {
    const contrasenias = { 
      id_usuario:id_usuario, 
      sitio_id:sitio_id, 
      usuario:usuario, 
      contrasenia:contrasenia
    }
    // Se registra al usuario en la base de datos
    return await contraseniasModel.agregarCont(contrasenias);
  }


module.exports = {
    obtenerContPorId,
    agregarCont
};