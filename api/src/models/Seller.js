const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("seller", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    mail: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    rol:{
      type: DataTypes.STRING,
    }
  });
};
//AÑADIR COSAS TIPO GRADUACIÓN, Y PARAMETROS PARA FANÁTICOS DE LA BIRRA
