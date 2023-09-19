const Cattle = require('../models/cattle');
const lossControl = require('../models/loss-control');

exports.findCattles = (req, res, next) => {
    Cattle.findAll()
    .then(cattles => {
        res.json(cattles);
    })
    .catch(err => console.log(err))
}

exports.findCattle = (req, res, next) => {

    const cattleId = req.params.cattleId;

    Cattle.findByPk(cattleId)
    .then(cattle => {
        res.json(cattle);
    })
    .catch(err => console.log(err));;
}

exports.addCattle = (req, res, next) => {
    const name = req.body.name;
    const race = req.body.race;
    const origin = req.body.origin;
    const date_nasc = new Date(req.body.date_nasc);

    Cattle.create({
        name: name,
        race: race,
        origin: origin,
        date_nasc: date_nasc
    })
    .then(something => {
        res.json({
            success: something
        })
    })
    .catch(err => console.log(err));
}

exports.postEditCattle = (req, res, next) => {

    const cattleId = req.body.id;
    const name = req.body.name;
    const race = req.body.race;
    const origin = req.body.origin;
    const date_nasc = new Date(req.body.date_nasc);

    Cattle.findByPk(cattleId)
    .then(cattle => {
        cattle.name = name;
        cattle.race = race;
        cattle.origin = origin;
        cattle.date_nasc = date_nasc;

        return cattle.save();
    })
    .then(success => {
        res.json({
            success: success
        })
    })
    .catch(err => console.log(err));
}

exports.deleteCattle = (req, res, next) => {

    const cattleId = req.body.id;
    Cattle.findByPk(cattleId)
    .then(cattle => {
        return cattle.destroy();
    })
    .then(success => {
        res.json({
            success: success
        })
    })
    .catch(err => console.log(err));
}

exports.findLostCattle = (req, res, next) => {
    Cattle.findAll({
        include: [{
            model:lossControl,
            required: true,
        }],
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => console.log(err));
}

exports.findLostCattleById = (req, res, next) => {
    const cattleId = req.params.cattleId;

    Cattle.findOne({
        where: { id: cattleId },
        include: [{
            model: lossControl,
            required: true,
        }],
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => console.log(err));
}

exports.addLostCattle = (req, res, next) => {
    const cattleId = req.body.cattleId;
    const observation = req.body.observation;

    Cattle.findByPk(cattleId)
    .then(cattle => {

        const lossControlTemp = lossControl.build({ observation: observation });

        return cattle.setLossControl(lossControlTemp);
    })
    .then(success => {
        res.json(success);
    })
    .catch(err => console.log(err));
}


// lossControl.create({
    //     cattleId: cattleId,
    //     observation: observation
    // })
    // .then(success => {
    //     res.json(success);
    // })
    // .catch(err => console.log(err));