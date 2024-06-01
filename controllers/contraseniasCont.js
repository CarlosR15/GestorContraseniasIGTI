const contraseniasModel = require('../models/contraseniasModel');



async function obtenerContPorId(usuarioId) {
    return await contraseniasModel.obtenerContPorId(usuarioId);
}

module.exports = {
    obtenerContPorId
};