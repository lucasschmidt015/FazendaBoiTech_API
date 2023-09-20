const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const vaccineApplication = sequelize.define('vaccineApplication', {
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    observation: {
        type: Sequelize.TEXT,
        allowNull: true,
    }
});

module.exports = vaccineApplication;