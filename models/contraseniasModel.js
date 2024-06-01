const axios = require('axios');
const dotenv = require('dotenv');

//Configura DotEnv
dotenv.config();

class Contrasenia {
    constructor(id, usuario_id, sitio_id, usuario, contrasenia) {
      this.id = id;
      this.usuario_id = usuario_id;
      this.sitio_id = sitio_id;
      this.usuario = usuario;
      this.contrasenia = contrasenia;
    }
}

async function obtenerContPorId(usuarioId) {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/contrasenias/obtenerContPorId`, {usuarioId});
      const contrasenia = response.data;
      return new Contrasenia(contrasenia.id, contrasenia.usuario_id,
        contrasenia.sitio_id, contrasenia.usuario, contrasenia.contrasenia);
    } catch (error) {
      console.error('Error al obtener las contrasenias por ID:', error);
      throw error;
    }
}

module.exports = {
    obtenerContPorId
};