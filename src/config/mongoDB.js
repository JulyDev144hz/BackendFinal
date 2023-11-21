const mongoose = require("mongoose");
const { mongo } = require("./");

let connection;
(async () => {
  try {
    connection = await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ni5ti26.mongodb.net/ecommerce?retryWrites=true&w=majority"
    );
    console.log("Conexión exitosa!");
  } catch (error) {
    console.log("No se pudo conectar a la base de datos!");
  }
})();

module.exports = { connection };
