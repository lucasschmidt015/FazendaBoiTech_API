const express = require('express');
const router = express.Router();

const propertyController = require('../controllers/property');

router.get('/find-cattles', propertyController.findCattles);

router.get('/find-cattle/:cattleId', propertyController.findCattle);

router.post('/add-cattle', propertyController.addCattle);

router.post('/edit-cattle', propertyController.postEditCattle);

router.post('/delete-cattle', propertyController.deleteCattle);

module.exports = router;