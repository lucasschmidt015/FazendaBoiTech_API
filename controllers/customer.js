const Customer = require('../models/customer');

exports.findCustomers = (req, res, next) => {

    Customer.findAll()
    .then(customers => {
        res.json(customers);
    })
    .catch(err => console.log(err));
}

exports.findCustomer = (req, res, next) => {
    const customerId = req.params.customerId;

    Customer.findByPk(customerId)
    .then(customer => {
        res.json(customer);
    })
    .catch(err => console.log(err));
}

exports.addCustomer = (req, res, next) => {
    const name = req.body.name;
    const cnpj_cpf = req.body.cnpj_cpf;
    const email = req.body.email;
    const neighborhood = req.body.neighborhood;
    const street = req.body.email;
    const city = req.body.city;

    Customer.create({
        name: name,
        cnpj_cpf: cnpj_cpf,
        email: email,
        neighborhood: neighborhood,
        street: street,
        city: city
    })
    .then(success => {
        res.json(success);
    })
    .catch(err => console.log(err));
}

exports.editCustomer = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const cnpj_cpf = req.body.cnpj_cpf;
    const email = req.body.email;
    const neighborhood = req.body.neighborhood;
    const street = req.body.email;
    const city = req.body.city;

    Customer.findByPk(id)
    .then(customer => {
        customer.name = name;
        customer.cnpj_cpf = cnpj_cpf;
        customer.email = email;
        customer.neighborhood = neighborhood;
        customer.street = street;
        customer.city = city;

        return customer.save();
    })
    .then(sucess => {
        res.json({
            success: sucess
        })
    })
    .catch(err => console.log(err));
}

exports.deleteCustomer = (req, res, next) => {
    const id = req.body.id;

    Customer.findByPk(id)
    .then(customer => {
        return customer.destroy();
    })
    .then(success => {
        res.json({
            success: success
        })
    })
    .catch(err => console.log(err));
}