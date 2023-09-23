//**************************************************imports**************************************************\\
//main things
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
const cattleRoute = require('./routes/cattle');
const vaccineRoute = require('./routes/vaccine');
const customerRoute = require('./routes/customer');
const orderRoute = require('./routes/order');

//controllers
const errorController = require('./controllers/error');

//bd
const sequelize = require('./util/database');
const Cattle = require('./models/cattle');
const Vaccine = require('./models/vaccine');
const Customer = require('./models/customer');
const lossControl = require('./models/loss-control');
const weightControl = require('./models/weight-control');
const vaccineApplication = require('./models/vaccine-application');
const Order = require('./models/order');

const app = express();

//*************************************************************************************************************\\

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//****************************Routes*******************************
app.get('/', errorController.get404);

app.use(cattleRoute);

app.use(vaccineRoute);

app.use(customerRoute);

app.use(orderRoute);

//Not found route
app.use(errorController.get404);

//*****************************************************************


//***************************Associetions**************************

Cattle.hasOne(lossControl);
lossControl.belongsTo(Cattle);

Cattle.hasMany(weightControl);
weightControl.belongsTo(Cattle);

Cattle.hasMany(vaccineApplication);
vaccineApplication.belongsTo(Cattle);
vaccineApplication.belongsTo(Vaccine);

Customer.hasMany(Order)
Order.belongsTo(Customer);
Cattle.hasOne(Order);


//*****************************************************************


sequelize.sync({ force: false })
.then(() => {
    app.listen(3000, () => {
        console.log('Started');
    });
})
.catch(err => console.log(err));