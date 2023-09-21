const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order');

router.get('/find-order', orderController.findOrder);

router.post('/new-order', orderController.newOrder);

module.exports = router;