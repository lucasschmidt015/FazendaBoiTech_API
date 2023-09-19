const express = require('express');
const router = express.Router();

const cattleController = require('../controllers/cattle');

router.get('/find-cattles', cattleController.findCattles);

router.get('/find-cattle/:cattleId', cattleController.findCattle);

router.post('/add-cattle', cattleController.addCattle);

router.post('/edit-cattle', cattleController.postEditCattle);

router.post('/delete-cattle', cattleController.deleteCattle);

router.get('/lost-cattle/:cattleId', cattleController.findLostCattleById);

router.get('/lost-cattle', cattleController.findLostCattle);

router.post('/add-lost-cattle', cattleController.addLostCattle);

module.exports = router;