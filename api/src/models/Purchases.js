const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "purchases",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "CANCELLED", "COMPLETED"),
      },
      address: {
        type: DataTypes.JSONB,
      },
      purchaseDetails: {
        type: DataTypes.JSONB,
      },
    },
    { paranoid: true }
  );
};
