const Vaccine = require('../models/vaccine');
const Cattle = require('../models/cattle');
const VaccineApplication = require('../models/vaccine-application');

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

exports.findVaccineApplication = (req, res, next) => {

    const cattleId = req.query.cattleId;
    const vaccineId = req.query.vaccineId;

    const retriveVaccineData = req.query.retriveVaccine;
    const retriveCattleData = req.query.retriveCattle;

    const filterCriteria = {};
    const includes = [];

    if (cattleId) {
        filterCriteria.cattleId = cattleId;
    }

    if (vaccineId) {
        filterCriteria.vaccineId = vaccineId;
    }

    if (retriveCattleData) {
        includes.push({
            model: Cattle,
            required: true,
        });
    }

    if (retriveVaccineData) {
        includes.push({
            model: Vaccine,
            required: true,
        });
    }


    VaccineApplication.findAll({
        where: filterCriteria,
        include: includes
    })
    .then(data =>{
        res.json(data);
    })
    .catch(err => console.log(err));
}

exports.addVaccineApplication = (req, res, next) => {
    const cattleId = req.body.cattleId;
    const vaccineId = req.body.vaccineId;
    const date = new Date(req.body.date);
    const observation = req.body.observation;

    VaccineApplication.create({
        cattleId: cattleId,
        vaccineId: vaccineId,
        date: date,
        observation: observation,
    })
    .then(success => {
        res.json(success);
    })
    .catch(err => console.log(err));
}