const axios = require("axios");

const getSuscripciones = async () => {
  const { data } = await axios.get("http://localhost:3000/suscripciones")
  data.forEach((suscripcion) => delete suscripcion.id)
  return data
};

module.exports = {
  getSuscripciones
}
