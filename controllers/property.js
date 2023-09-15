const Cattle = require('../models/cattle');

exports.findCattles = (req, res, next) => {
    Cattle.findAll()
    .then(cattles => {
        res.json(cattles);
    })
    .catch(err => console.log(err))
}

exports.findCattle = (req, res, next) => {
    res.json({
        name: 'Katarina',
        age: 4,
    })
}

exports.addCattle = (req, res, next) => {
    res.json({
        success: true 
    })
}

exports.getEditCattle = (req, res, next) => {
    res.json({
        name: 'Katarina',
        age: 4,
    })
}

exports.postEditCattle = (req, res, next) => {
    res.json({
        success: true 
    })
}

exports.deleteCattle = (req, res, next) => {
    res.json({
        success: true 
    })
}