const express = require('express');

const vaccineController = require('../controllers/vaccine');

const router = express.Router();

router.get('/find-vaccines', vaccineController.findVaccines);

router.get('/find-vaccine/:vaccineId', vaccineController.findVaccine);

router.post('/add-vaccine', vaccineController.addVaccine);

router.post('/edit-vaccine', vaccineController.editVaccine);

router.post('/delete-vaccine', vaccineController.deleteVaccine);

module.exports = router;