const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/sequelizeConfig');

const Book = sequelize.define('Book', {
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Books',
    timestamps: false,
});

module.exports = Book;
