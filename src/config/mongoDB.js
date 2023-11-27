const mongoose = require("mongoose");
const { mongo } = require("./");

let connection;
(async () => {
  try {
    connection = await mongoose.connect(mongo.atlas, {
      // bufferCommands: false, // Desactiva el buffering de comandos
      // bufferTimeoutMS: 30000, // Ajusta el tiempo de espera a 30 segundos
    });
    console.log("Conexión exitosa!");
  } catch (error) {
    console.log("No se pudo conectar a la base de datos!");
  }
})();

module.exports = { connection };
