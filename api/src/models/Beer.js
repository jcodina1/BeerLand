const { DataTypes } = require("sequelize");
const Seller = require("./Seller");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("beer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    }
  }, { paranoid: true });
};
//AÑADIR COSAS TIPO GRADUACIÓN, Y PARAMETROS PARA FANÁTICOS DE LA BIRRA
