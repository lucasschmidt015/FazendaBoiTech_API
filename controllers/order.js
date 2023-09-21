const Cattle = require('../models/cattle');
const Customer = require('../models/customer');
const Order = require('../models/order');


exports.findOrder = (req, res, next) => {
    
    const cattleId = req.query.cattleId;
    const customerId = req.query.customerId;

    const showCustomer = req.query.showCustomer;

    const fildsToFilter = {};
    const includes = [];

    if (cattleId) {
        fildsToFilter.cattleId = cattleId;
    }

    if (customerId) {
        fildsToFilter.customerId = customerId;
    }

    if (showCustomer) {
        includes.push({
            model: Customer,
            required: true
        })
    }

    Order.findAll({
        where: fildsToFilter,
        include: includes
    })
    .then(data => {
        res.json(data);
    })  
    .catch(err => console.log(err));
}

exports.newOrder = (req, res, next) => {
    const customerId = req.body.customerId;
    const cattleId = req.body.cattleId;
    const discountPercentage = parseFloat(req.body.discountPercentage);
    const totalDiscountValue = parseFloat(req.body.totalDiscountValue);
    const ValueKG = parseFloat(req.body.ValueKG);

    Order.create({
        customerId: customerId,
        cattleId: cattleId,
        discountPercentage: discountPercentage,
        totalDiscountValue: totalDiscountValue,
        ValueKG: ValueKG,
    })
    .then(success => {
        res.json(success);
    })
    .catch(err => console.log(err));
}