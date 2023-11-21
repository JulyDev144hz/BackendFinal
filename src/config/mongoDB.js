const mongoose = require("mongoose");
const { mongo } = require("./");

let connection;
(async () => {
  try {
    connection = await mongoose.connect(
      mongo.atlas,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      () => {
        console.log("Connected to MongoDB");
      }
    );
    console.log("Conexión exitosa!");
  } catch (error) {
    console.log("No se pudo conectar a la base de datos!");
  }
})();

module.exports = { connection };
