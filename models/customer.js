const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const Customer = sequelize.define('customer', {
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
    cnpj_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Customer;