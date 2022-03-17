require('dotenv').config();
require('./config/config');
require('./models/db');
require('./config/passportConfig');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const profilesRoutes = require('./routes/profiles');

const { mongoose } = require('./db.js');


const rtsIndex = require('./routes/index.router');

var yogaController = require('./controllers/yogaController.js');
var supplementController = require('./controllers/supplementController.js');
var doctorController = require('./controllers/doctorController.js');
var dietController = require('./controllers/dietController.js');
var contactController = require('./controllers/contactController.js');
var bodybuildingController = require('./controllers/bodybuildingController.js');
var app = express();

// middleware
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(passport.initialize());
app.use('/api', rtsIndex);




app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});


app.listen(3000, () => console.log('Server started at port : 3000'));

// start server
// app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

app.use('/yoga',yogaController);
app.use('/bodybuilding',bodybuildingController)
app.use('/supplement',supplementController);
app.use('/doctor',doctorController);
app.use('/diet',dietController);
app.use('/contact',contactController);
app.use('/images', express.static(path.join('images')));

app.use('/api/profiles', profilesRoutes);


