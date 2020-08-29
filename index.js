//initialization 
const path  = require('path');
const express = require('express');
const app = express();
const log = require('./routes/login');
const reg = require('./routes/register');
//const forget = require('./routes/forget');
const morgan = require('morgan');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');
//setting the port
const port = process.env.PORT||3000;
const mongoose = require('mongoose');
const database = require('./database');

//const keys = require('./config/key');
app.use(express.static(path.join(__dirname,'views')));
// setting up the view engine
app.set('view engine','ejs');
app.set ('views','./views');

app.use(morgan('dev'));
app.use(cors());

//database connection code
// mongoose.connect(keys.mongoDB.dbURI,()=>{
//     console.log('database connected');
// })

//setting up the routes 
app.use('/auth',log);
app.use('/register',reg);
//app.use('/forget',forget);

app.listen(port,()=>{
    console.log(`server is running in ${port}......`);
});