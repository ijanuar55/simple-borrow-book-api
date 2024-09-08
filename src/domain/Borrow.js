const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/sequelizeConfig');

const Borrow = sequelize.define('Borrow', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    bookCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    memberCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    borrowedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'Borrows',
    timestamps: false,
});

module.exports = Borrow;
