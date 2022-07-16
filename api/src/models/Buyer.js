const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("buyer", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
    surname: {
      type: DataTypes.BOOLEAN,
    },
    purchases: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.TEXT,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
    },
    brewery: {
      type: DataTypes.TEXT,
    },
    celiac: {
      type: DataTypes.BOOLEAN,
    },
  });
};
// supongo que es bueno trackear la cantidad de compras que ha hecho el usuario, debiesemos juntarnos a definir que cosas debiese tener en mente el back o en su defecto
// darnos cuenta cuando compilemos por primera vez una versión esquelética de la app
