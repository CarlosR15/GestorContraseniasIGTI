const axios = require('axios');
const dotenv = require('dotenv');

//Configura DotEnv
dotenv.config();

class SitioWeb {
    constructor(id, usuario_id, name, url) {
      this.id = id;
      this.usuario_id = usuario_id;
      this.name = name;
      this.url = url;
    }
}

async function obtenerSitios() {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/sitios/obtenerSitios`);
      const sitios = response.data;
      return sitios.map(sitiosWeb => new SitioWeb(sitiosWeb.id, sitiosWeb.usuario_id,
        sitiosWeb.name, sitiosWeb.url));
    } catch (error) {
      console.error('Error al obtener todos los sitios:', error);
      throw error;
    }
}

async function agregarSitio(sitioWeb) {
    try {
        await axios.post(`${process.env.BASE_URL}/sitios/agregarSitio`, { sitioWeb });
    } catch (error) {
        console.error('Error al agregar el sitio:', error);
        throw error;
    }
}

async function obtenerSitioNomPorId(usuarioId) {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/sitios/obtenerSitioNomPorId`, { data: { usuarioId } });
      const sitios = response.data;
      return sitios.map(sitios =>new SitioWeb(sitios.id, sitios.usuario_id,
        sitios.nombre, sitios.url));
    } catch (error) {
      console.error('Error al obtener las sitios por ID:', error);
      throw error;
    }
}


module.exports = {
    obtenerSitios,
    agregarSitio,
    obtenerSitioNomPorId
};