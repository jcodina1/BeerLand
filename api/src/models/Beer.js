const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("beer", {
    name: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    origin: {
      type: DataTypes.TEXT,
    },
    seller: {
      type: DataTypes.TEXT,
    },
    brewery: {
      type: DataTypes.TEXT,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
    },
    gluten: {
      type: DataTypes.BOOLEAN,
    },
    img:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    }
  });
};
//AÑADIR COSAS TIPO GRADUACIÓN, Y PARAMETROS PARA FANÁTICOS DE LA BIRRA
