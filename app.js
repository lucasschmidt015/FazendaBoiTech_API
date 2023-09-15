//**************************************************imports**************************************************\\
//main things
const express = require('express');
const bodyParser = require('body-parser');

//routes
const propertyRoute = require('./routes/property');

//controllers
const errorController = require('./controllers/error');

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

app.listen(3000);
