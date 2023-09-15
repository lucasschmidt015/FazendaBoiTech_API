const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cattle = sequelize.define('cattle', {
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
    race: {
        type: Sequelize.STRING,
        allowNull: false
    },
    origin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_nasc: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Cattle;