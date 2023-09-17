const Vaccine = require('../models/vaccine');

exports.findVaccines = (req, res, next) => {

    Vaccine.findAll()
    .then(vaccines => {
        res.json(vaccines);
    })
    .catch(err => console.log(err));
}

exports.findVaccine = (req, res, next) => {
    const vaccineId = req.params.vaccineId;

    Vaccine.findByPk(vaccineId)
    .then(vaccine => {
        res.json(vaccine);
    })
    .catch(err => console.log(err));
}

exports.addVaccine = (req, res, next) => {
    const name = req.body.name;
    const periodic = req.body.periodic;

    Vaccine.create({
        name: name,
        periodic: periodic
    })
    .then(success => {
        res.json(success);
    })
    .catch(err => console.log(err));
}

exports.editVaccine = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const periodic = req.body.periodic;

    Vaccine.findByPk(id)
    .then(vaccine => {
        vaccine.name = name;
        vaccine.periodic = periodic;
        return vaccine.save();
    })
    .then(sucess => {
        res.json({
            success: sucess
        })
    })
    .catch(err => console.log(err));
}

exports.deleteVaccine = (req, res, next) => {
    const id = req.body.id;

    Vaccine.findByPk(id)
    .then(vaccine => {
        return vaccine.destroy();
    })
    .then(success => {
        res.json({
            success: success
        })
    })
    .catch(err => console.log(err));
}