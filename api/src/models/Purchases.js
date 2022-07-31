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
      userId: {
        type: DataTypes.INTEGER,
      },
      sellerId: {
        type: DataTypes.INTEGER,
      },
      purchaseDetail: {
        type: DataTypes.JSONB,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "CANCELLED", "COMPLETED"),
      },
    },

    { paranoid: true }
  );
};
