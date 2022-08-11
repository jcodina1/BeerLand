const { DataTypes } = require('sequelize');
//? consultas a admin
module.exports = (sequelize) => {
    sequelize.define('support', {
        idSupport: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        isUser: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        //? status: 0 = pendiente, 1 = respondido por admin, 2 = respondido por user 
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

}