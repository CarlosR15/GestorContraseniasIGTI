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
      const response = await axios.get(`${process.env.BASE_URL}/contrasenias/obtenerContPorId`, { data: { usuarioId } });
      const contrasenia = response.data;
      return contrasenia.map(contrasenia => new Contrasenia(contrasenia.id, contrasenia.usuario_id,
        contrasenia.sitio_id, contrasenia.usuario, contrasenia.contrasenia));
    } catch (error) {
      console.error('Error al obtener las constraseñas por ID:', error);
      throw error;
    }
}

async function eliminarCont(idContrasenia) {
  try {
    await axios.delete(`${process.env.BASE_URL}/contrasenias/eliminarCont/${idContrasenia}`);
    console.log('Se ha eliminado la contraseña');
    return;
  } catch (error) {
    console.error('Error al borrar la contraseña por su ID:', error);
    throw error;
  }
}

async function agregarCont(contrasenias) {
  try {
      await axios.post(`${process.env.BASE_URL}/contrasenias/agregarCont`, { contrasenias });
  } catch (error) {
      console.error('Error al agregar la contrasenias:', error);
      throw error;
  }
}

module.exports = {
    obtenerContPorId,
    agregarCont,
    eliminarCont
};