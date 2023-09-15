//**************************************************imports**************************************************\\
//main things
const express = require('express');
const bodyParser = require('body-parser');

//routes
const propertyRoute = require('./routes/property');

//controllers
const errorController = require('./controllers/error');

//bd
const sequelize = require('./util/database');
const Cattle = require('./models/cattle');

const app = express();

//*************************************************************************************************************\\

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.json({
        page: 'In development'
    })
})

app.use(propertyRoute);

//Not found route
app.use(errorController.get404);

sequelize.sync({ force: false })
.then(() => {
    app.listen(3000, () => {
        console.log('Started');
    });
})
.catch(err => console.log(err));

