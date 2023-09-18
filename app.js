//**************************************************imports**************************************************\\
//main things
const express = require('express');
const bodyParser = require('body-parser');

//routes
const cattleRoute = require('./routes/cattle');
const vaccineRoute = require('./routes/vaccine');
const customerRoute = require('./routes/customer');

//controllers
const errorController = require('./controllers/error');

//bd
const sequelize = require('./util/database');
const Cattle = require('./models/cattle');
const Vaccine = require('./models/vaccine');
const Customer = require('./models/customer');
const lossControl = require('./models/loss-control');

const app = express();

//*************************************************************************************************************\\

app.use(bodyParser.urlencoded({extended: false}));


//****************************Routes*******************************
app.get('/', (req, res, next) => {
    res.json({
        page: 'In development'
    })
})

app.use(cattleRoute);

app.use(vaccineRoute);

app.use(customerRoute);

//Not found route
app.use(errorController.get404);

//*****************************************************************


//***************************Associetions**************************

lossControl.belongsTo(Cattle);

//*****************************************************************


// sequelize.sync()
sequelize.sync({ force: false })
.then(() => {
    app.listen(3000, () => {
        console.log('Started');
    });
})
.catch(err => console.log(err));