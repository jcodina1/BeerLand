const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("score", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    score: {
        type: DataTypes.INTEGER,
/*         validate: {
          min: 1,
          max: 5,
        } */
      },
  }, { timestamps: false });
};