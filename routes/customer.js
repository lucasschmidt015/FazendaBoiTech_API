const express = require('express');

const customerController = require('../controllers/customer');

const router = express.Router();

router.get('/find-customers', customerController.findCustomers);

router.get('/find-customer/:customerId', customerController.findCustomer);

router.post('/add-customer', customerController.addCustomer);

router.post('/edit-customer', customerController.editCustomer);

router.post('/delete-customer', customerController.deleteCustomer);

module.exports = router;