const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/sequelizeConfig');

const Member = sequelize.define('Member', {
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    borrowedBooks: {
        type: DataTypes.JSONB,
        defaultValue: [],
    },
    penaltyUntil: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'Members',
    timestamps: false,
});

module.exports = Member;
