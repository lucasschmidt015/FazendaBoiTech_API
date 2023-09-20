const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const weightControl = sequelize.define('weightControl',{
    weight: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    }
})

module.exports = weightControl;