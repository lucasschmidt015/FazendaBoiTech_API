const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const weightControl = sequelize.define('weightControl',{
    weight: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

module.exports = weightControl;