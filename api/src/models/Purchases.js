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
      paymentMethod: {
        type: DataTypes.STRING,
      },
      delivery: {
        type: DataTypes.BOOLEAN,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "CANCELLED", "COMPLETED"),
      },
    },

    { paranoid: true }
  );
};

//      beerQuantityExample = {
//             'id1' : [cantidad,precio]
//                   ...
//             'idN' : [cantidad,precio]
//               }
