const Cattle = require('../models/cattle');
const Customer = require('../models/customer');


exports.findOrder = (req, res, next) => {
    res.json({
        hehe: ':)',
    });
}

exports.newOrder = (req, res, next) => {
    const customerId = req.body.customerId;
    const cattleId = req.body.cattleId;
    const discountPercentage = req.body.discountPercentage;
    const totalDiscountValue = req.body.totalDiscountValue;
    const ValueKG = req.body.ValueKG;

    //<-----------

}