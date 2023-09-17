const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const lossControl = sequelize.define('lossControl',{
    observation: {
        type: Sequelize.STRING
    }
})

module.exports = lossControl;