const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const Order = sequelize.define('order', {
    discountPercentage: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    totalDiscountValue: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    ValueKG: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    }
});

module.exports = Order;