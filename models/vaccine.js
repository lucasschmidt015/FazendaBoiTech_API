const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const Vaccine = sequelize.define('vaccine', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    periodic: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Vaccine;